import { Character } from "./character.model";

export interface Staff extends Character{
    hogwartsStudent: false;
    hogwartsStaff: true;
}
