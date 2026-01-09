import { Component, input, Input } from '@angular/core';
import { Staff } from '../../../models/staff.model';

@Component({
  selector: 'app-staff-list',
  imports: [],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.scss',
})
export class StaffList {
  staffCollection = input.required<Staff[]>(); 
}
