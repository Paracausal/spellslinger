import { v4 as uuidv4 } from 'uuid';

export class Card {
    id: string;
    name: string;
    mana: number;
    attack: number;
    health: number;

    constructor(name: string, mana: number, attack: number, health: number) {
        this.id = uuidv4();
        this.name = name;
        this.mana = mana;
        this.health = health,
        this.attack = attack
    }
}
