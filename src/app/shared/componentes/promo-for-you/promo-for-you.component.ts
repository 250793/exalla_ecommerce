import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Ofertas } from 'src/app/model/ofertas';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import UIkit from 'uikit';



interface IRouteStructure {
  [key: string]: string;
}

@Component({
  selector: 'app-promo-for-you',
  templateUrl: './promo-for-you.component.html',
  styleUrls: ['./promo-for-you.component.scss']
})
export class PromoForYouComponent implements OnInit {

  offers: Ofertas[] = [];
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.httpClient.get(`${environment.api}/home/slider`)
      .subscribe({
        next: (value: any) => {
          this.offers = value

          console.log(this.offers)
        },
      });
  }
  clickImagem(e: string) {
    if (e.includes('?')) {
      const [route, params] = e.split('?');
      const singleParams = params.split('&');
      const values: IRouteStructure = {};
      if (singleParams) {
        singleParams.forEach(
          value => {
            const [a, b] = value.split('=');
            values[a] = b;
          }
        )
      }
      this.router.navigate([route], {
        queryParams: {
          ...values
        }
      })
    } else {
      this.router.navigate([e])
    }
  }
}
