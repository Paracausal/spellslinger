import { Component, Input, OnInit } from '@angular/core';
import { fireball } from 'src/app/data/cards.constants';
import { Card } from 'src/app/models/card.types';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card = fireball;

  ngOnInit(): void {
  }
}
