import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { environment } from '../../environments/environment';
import { Staff } from '../models/staff.model';
import { Student } from '../models/student.model';
import { Spell } from '../models/spell.model';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService{
  private httpClient: HttpClient = inject(HttpClient);

  // Returns all characters (wizards, witches, magical creatures)
  getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${environment.baseUrl}/characters`);
  }

  // Find a specific character by their unique ID
  getCharacterById(id: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${environment.baseUrl}/character/${encodeURIComponent(id)}`);
  }

  // @TODO Retrieve all Hogwarts students
  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environment.baseUrl}/characters/students`);
  }

  // @TODO Access information about Hogwarts faculty and staff
  getStaff(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(`${environment.baseUrl}/characters/staff`);
  }

  // @TODO Find characters from a specific Hogwarts house
  getCharactersFromHouse(house: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${environment.baseUrl}/characters/house/${encodeURIComponent(house)}`);
  }

  // @TODO Discover all magical spells and their incantations
  getSpell(): Observable<Spell[]> {
    return this.httpClient.get<Spell[]>(`${environment.baseUrl}/spells`);
  }
}
