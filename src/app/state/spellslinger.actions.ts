import { createAction, props } from '@ngrx/store';
import { Card } from '../models/card.types';

export const startMatch = createAction(
    '[Spellslingers] Start Match',
);

export const drawCard = createAction(
    '[Spellslingers] Draw Card',
);

export const playCard = createAction(
    '[Spellslingers] Play Card',
    props<{ zone: number; card: Card }>()
);
