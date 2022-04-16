import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../../models/card.types';
import { cardEvent } from '../../../models/events.types';

@Component({
  selector: 'zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  @Input() index: number = 0;
  @Output() event = new EventEmitter<cardEvent>();

  zone: Card[] = [];

  ngOnInit(): void {};

  emitEvent(event: CdkDragDrop<Card[]>) {
    this.event.emit({
      event: event,
      zone: this.index
    });
  }
}
