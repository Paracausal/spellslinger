import { createReducer, on } from '@ngrx/store';
import { drawCard, playCard, startMatch } from './spellslinger.actions';
import { initialState } from './spellslinger.constants';
import { shuffleCardArray } from './spellslinger.utils';

const _spellslingerReducer = createReducer(
  initialState,
  on(startMatch, (state) => {
    const shuffledDeck = shuffleCardArray([...state.deck]);

    return {
      ...state,
      deck: shuffledDeck,
    }
  }),
  on(drawCard, (state) => {
    const card = state.deck[0];

    if(card === undefined) {
      return state
    }

    const changedDeck = [...state.deck];
    changedDeck.shift();

    return {
      ...state,
      hand: [
        ...state.hand,
        card
      ],
      deck: changedDeck,
    }
  }),
  on(playCard, (state, {zone, card}) => {
    const changedZones = state.zones.map(currentZone => {
      if(currentZone.id === zone) {
        return {
          id: zone,
          card: card
        }
      }
      return currentZone;
    });

    const changedHand = state.hand.filter(currentCard => currentCard.id !== card.id);

    return {
      ...state,
      hand: changedHand,
      zones: changedZones
    }
  }),
);

export function spellslingerReducer(state: any, action: any) {
  return _spellslingerReducer(state, action);
}
