import { Character } from "./character.model";

export interface Student extends Character{
    hogwartsStudent: true;
    hogwartsStaff: false;
}
