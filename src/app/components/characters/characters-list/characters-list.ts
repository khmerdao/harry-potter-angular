import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Character } from '../../../models/character.model';
import { CommonModule } from '@angular/common';
import { CharacterDetails } from '../character-details/character-details';

@Component({
  selector: 'app-characters-list',
  imports: [CommonModule, CharacterDetails],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  // @Input() characters!: Character[];
  // Mode Signal
  characters = input.required<Character[]>();

  @Output() characterClicked = new EventEmitter<Character>();

  selectedCharacter: Character | null = null;
  showModal = false;

  onCharacterClick(character: Character): void {
    this.selectedCharacter = character;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedCharacter = null;
  }
}

// 1. Créer un composant enfant au composant characters qui va s'appeler characters-list.
// 2. Les données de l'API récupérées dans le composant characters doivent être transmises au composant characters-list.
// 3. Le composant characters-list doit s'occupper de les afficher.