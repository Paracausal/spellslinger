import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Card } from 'src/app/models/card.types';
import { CardZone, GameState } from 'src/app/models/gamestate.types';
import { drawCard, playCard, startMatch } from 'src/app/state/spellslinger.actions';
import { selectDeck, selectHand, selectTurn, selectZones } from 'src/app/state/spellslinger.selectors';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit, OnDestroy {
  title = 'match';

  hand: Card[] = [];
  deck: Card[] = [];
  zones: CardZone[] = [];
  turn$: Observable<number>;
  hand$: Observable<Card[]>;
  deck$: Observable<Card[]>;
  zones$: Observable<CardZone[]>;

  private readonly unsubscribe$ = new Subject<void>();

  constructor(private store: Store<{spellslinger: GameState}>) {
    this.turn$ = store.select(selectTurn);
    this.hand$ = store.select(selectHand);
    this.deck$ = store.select(selectDeck);
    this.zones$ = store.select(selectZones);
  }

  ngOnInit() {
    this.store.dispatch(startMatch());
    this.hand$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(newCards => this.hand = [...newCards]);
    this.deck$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(newCards => this.deck = [...newCards]);
    this.zones$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(newZones => this.zones.push(...newZones));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  drop(event: CdkDragDrop<Card[]>, zone: number): void {
    if (event.previousContainer !== event.container && !event.container.data.length) {
      const card = event.previousContainer.data[event.previousIndex];
      this.store.dispatch(playCard({zone, card}));

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  draw() {
    this.store.dispatch(drawCard());
  }
}
