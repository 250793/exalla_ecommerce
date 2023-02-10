import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IHomeBrand } from 'src/app/model/home.structure.model';
import { Router } from '@angular/router';
import { SocialLoginService } from '../../services/social-login.service';

@Component({
  selector: 'app-recommend-slide',
  templateUrl: './recommend-slide.component.html',
  styleUrls: ['./recommend-slide.component.scss']
})
export class RecommendSlideComponent implements OnInit {

  brands: IHomeBrand[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.httpClient.post(`${environment.api}/home/brand`,[])
      .subscribe({
        next: (value: any) => {
          this.brands = value;
        }
      })
  }
  marcas(descricao_marca: string) {
    this.router.navigate(
      ['/produtos'],
      {
        queryParams: {
          descricao_marca
        }
      }
    )
  }

}
