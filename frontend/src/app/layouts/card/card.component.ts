import { Component, Input } from '@angular/core';
import { ICard } from 'src/interfaces/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: ICard = {};
}
