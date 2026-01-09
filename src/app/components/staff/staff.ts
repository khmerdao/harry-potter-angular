import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ApiEndpointsService } from '../../services/api-endpoints.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Staff as StaffModel } from '../../models/staff.model';
import { StaffList } from './staff-list/staff-list';

@Component({
  selector: 'app-staff',
  imports: [StaffList],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})
export class Staff implements OnInit, OnDestroy {
  private apiService: ApiEndpointsService = inject(ApiEndpointsService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private subscriptions: Subscription[] = [];

  protected staffList = signal<StaffModel[]>([]);
  protected character!: StaffModel; 

  ngOnInit(): void {
    const staffSubscriptions = this.apiService.getStaff().subscribe((data: StaffModel[]) => {
      this.staffList.set(data);
    });
    console.log("StaffCollection", this.staffList);
    this.subscriptions.push(staffSubscriptions);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}
