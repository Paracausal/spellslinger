import { createSelector } from "@ngrx/store";
import { GameState } from "../models/gamestate.types";

export const selectState = (state: {spellslinger: GameState}) => state.spellslinger;

export const selectTurn = createSelector(
    selectState,
    (state: GameState) => state.turn
);

export const selectHand = createSelector(
    selectState,
    (state: GameState) => state.hand
);

export const selectDeck = createSelector(
    selectState,
    (state: GameState) => state.deck
);

export const selectZones = createSelector(
    selectState,
    (state: GameState) => state.zones
);