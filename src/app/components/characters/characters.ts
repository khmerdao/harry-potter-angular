import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { Character } from '../../models/character.model';
import { ApiEndpointsService } from '../../services/api-endpoints.service';
import { CharactersList } from "./characters-list/characters-list";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [CharactersList],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit, OnDestroy{
  // protected characters!: Character[];
  // protected characters: Character[] = [];
  protected characters = signal<Character[]>([]);
  protected character!: Character;

  protected section = signal<string>('');

  private apiService: ApiEndpointsService = inject(ApiEndpointsService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    const charactersSubrciptions = this.apiService.getAllCharacters().subscribe((characters: Character[]) => {
        // this.characters = characters;
        // Avec Signal
        this.characters.set(characters);
      });
    this.subscriptions.push(charactersSubrciptions);
    this.getActivateRouteData();
  }

  protected getCharacter(character: Character): void {
    this.character = character;
  }

  private getActivateRouteData() {
    const data = this.activeRoute.data.subscribe((data) => {
      this.section.set(data['section']);
    });

    this.subscriptions.push(data);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
