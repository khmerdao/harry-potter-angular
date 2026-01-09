import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-character-details',
  imports: [],
  templateUrl: './character-details.html',
  styleUrl: './character-details.scss',
})
export class CharacterDetails {
  @Input() character!: Character;
}
