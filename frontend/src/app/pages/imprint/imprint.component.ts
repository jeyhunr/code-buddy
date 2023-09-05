import { Component } from '@angular/core';
import { ICard } from 'src/interfaces/card.model';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  pageTitle: string = 'Imprint';

  imprintCard: ICard = {
    title: "Jeyhun Rahimli",
    buttonText: "mail@rahimli.net"
  }
}
