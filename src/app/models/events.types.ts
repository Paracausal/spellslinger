import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Card } from "./card.types";

export interface cardEvent {
    event: CdkDragDrop<Card[]>,
    zone: number,
}