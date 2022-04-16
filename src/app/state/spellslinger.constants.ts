import { cards } from "../data/cards.constants";
import { GameState, Phase } from "../models/gamestate.types";

export const initialState: GameState = {
    turn: 1,
    phase: Phase.Draw,
    hand: [],
    deck: cards,
    zones: [
      {
        id: 0,
        card: undefined
      },
      {
        id: 1,
        card: undefined
      },
      {
        id: 2,
        card: undefined
      },
      {
        id: 3,
        card: undefined
      },
      {
        id: 4,
        card: undefined
      },
      {
        id: 5,
        card: undefined
      },
      {
        id: 6,
        card: undefined
      },
      {
        id: 7,
        card: undefined
      },
    ]
  };