import { Card } from "./card.types";

export interface GameState {
    turn: number,
    phase: Phase,
    hand: Card[],
    deck: Card[],
    zones: CardZone[]
}

export enum Phase {
    Draw = 'DRAW',
    Play = 'PLAY',
    Resolution = 'RESOLUTION',
    End = 'END'
}

export interface CardZone {
    id: number,
    card: Card | undefined
}
