import { Component, inject, OnInit, signal } from '@angular/core';
import { Character } from '../../models/character.model';
import { ApiEndpointsService } from '../../services/api-endpoints.service';
import { CharactersList } from "./characters-list/characters-list";

@Component({
  selector: 'app-characters',
  imports: [CharactersList],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit{
  protected characters!: Character[];
  // protected characters: Character[] = [];
  // protected characters: Character[] = signal<Character[]>([]);
  protected character!: Character;

  private apiService: ApiEndpointsService = inject(ApiEndpointsService);

  ngOnInit(): void {
    console.log("Character Component ngOnInit !");
    this.apiService.getAllCharacters().subscribe((characters: Character[]) => {
      this.characters = characters;
      console.log(characters);
    });
  }

  protected getCharacter(character: Character): void {
    this.character = character;
  }
}
