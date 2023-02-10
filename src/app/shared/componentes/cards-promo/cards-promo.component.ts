import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards-promo',
  templateUrl: './cards-promo.component.html',
  styleUrls: ['./cards-promo.component.scss']
})
export class CardsPromoComponent implements OnInit {

  images = [
    "../../../../assets/imagens/card-promo/card-1.webp",
    "../../../../assets/imagens/card-promo/card-2.webp",
    "../../../../assets/imagens/card-promo/card-3.webp",
    "../../../../assets/imagens/card-promo/card-4.webp",
    "../../../../assets/imagens/card-promo/card-5.webp",


  ]

  constructor() { }

  ngOnInit(): void {
  }


}
