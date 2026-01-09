import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Character } from '../../../models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  imports: [CommonModule],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  @Input() characters!: Character[];
  // characters = input.required();
  @Output() characterClicked = new EventEmitter<Character>();
}

// 1. Créer un composant enfant au composant characters qui va s'appeler characters-list.
// 2. Les données de l'API récupérées dans le composant characters doivent être transmises au composant characters-list.
// 3. Le composant characters-list doit s'occupper de les afficher.