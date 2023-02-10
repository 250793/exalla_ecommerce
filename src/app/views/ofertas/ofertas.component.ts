import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaProduto } from '../../model/listaproduto.model';
import { Filtro } from 'src/app/model/filtro';
import { FiltroComponent } from 'src/app/shared/componentes/filtro/filtro.component';
import { CarrinhoService } from '../../shared/services/carrinho.service';
import { SocialLoginService } from '../../shared/services/social-login.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  filters = [
    {
      name: 'Menor Preço',
      value: 'preco_venda ASC'
    },
    {
      name: 'Maior Preço',
      value: 'preco_venda DESC'
    },
    {
      name: 'De A/Z',
      value: 'descricao ASC'
    },
    {
      name: 'De Z/A',
      value: 'descricao DESC'
    },
  ]

  products: ListaProduto[] = [];
  page = 0;
  filtroRequest!: Filtro
  params?: any;
  sort!: string;
  fetching = false;
  finished = false;


  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private socialLoginService :SocialLoginService

  ) { }

  request?: any;

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {

        this.params = params;

        this.page = 0;
        this.finished = false;

        this.products = []

        FiltroComponent.clearEvent.emit(true);
        this.onScroll();
      })


  }
  parseValue(value: number): string {
    return Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency'
    }).format(value);
  }
  loadImage(source: string) {
    return source;
  }
  handleFavorite(p: any) {
    // p.favorite = !p.favorite;
  }
  onScroll() {

    if (this.fetching || this.finished) {
      return;
    }

    this.fetching = true;

    this.httpClient.post(`${environment.api}/product/offer`, this.filtroRequest, {

      limit: 15,
      page: this.page,
      ...this.params
    })
      .subscribe({
        next: async (value: any) => {
          this.products = [...this.products, ...value];

          this.page = this.page + 1;
          this.fetching = false;

          if (value.length < 15) {
            this.finished = true;
          }
        },
        error: () => {
          this.fetching = false;
        }
      })
  }

  voltar() {
    const token = this.socialLoginService.retrieveToken();
    const carrinhoToken = localStorage.getItem('cod_carrinho');

    localStorage.clear();

    this.socialLoginService.persist('@access_token', token);
    this.socialLoginService.persist('cod_carrinho', carrinhoToken)

    this.router.navigate([''])
  }
  order(e: any) {
    this.filtroRequest = {
      ...this.filtroRequest,
      ...e
    }

    localStorage.setItem('filtroRequest', JSON.stringify(this.filtroRequest))

    if (this.request) {
      this.request.unsubscribe();
    }

    this.page = 0;
    this.finished = false;
    this.fetching = false;
    this.products = [];
    this.onScroll()
  }
  addCart(cod_produto: string, quantity: number){
    this.carrinhoService
    .createProduct(cod_produto, quantity, '+')
    .subscribe({
      next: (value: any) => {
        localStorage.setItem('cod_carrinho',value.cod_carrinho)

        this.carrinhoService.update()
      }
    })
  }
}
