import { CarrinhoService } from './../../shared/services/carrinho.service';
import { ListaProduto } from './../../model/listaproduto.model';

import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import { Filtro } from 'src/app/model/filtro';
import { FiltroComponent } from '../../shared/componentes/filtro/filtro.component';
import { FormArray, FormGroup } from '@angular/forms';
import { Departamento } from 'src/app/model/departamento';
import { SocialLoginService } from '../../shared/services/social-login.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  filtroRequest!: Filtro
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


  sort!: string;
  products: ListaProduto[] = [];
  page = 0;
  params?: any;
  fetching = false;
  finished = false;


  constructor(
    private location: Location,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router,
    private socialLoginService: SocialLoginService,
    private carrinhoService: CarrinhoService,
    public renderer: Renderer2
  ) { }

  request?: any;


  ngOnInit(): void {
    this.page = 0;


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

  loadImage(source: string) {
    return source;
  }

  parseValue(value: number): string {
    return Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency'
    }).format(value);
  }
  handleFavorite(p: any) {
    // p.favorite = !p.favorite;
  }
  onScroll() {
    if (this.fetching || this.finished) {
      return;
    }

    this.fetching = true;

    const searchParams = {
      descricao: this.params.q ?? '',
      cod_produto: this.params.q ?? this.params.cod_produto ?? '',
      codigo_barras: this.params.q ?? '',
      ...(this.params.cod_grupo && {
        cod_grupo: this.params.cod_grupo
      }),
      ...(this.params.cod_subgrupo && {
        cod_subgrupo: this.params.cod_subgrupo
      }),
      descricao_marca: this.params.descricao_marca ?? ''
    }

    this.spinner.show()


    this.filtroRequest = {
      ...this.filtroRequest,
      ...searchParams,

      limit: 15,
      page: this.page
    }



    this.request = this.httpClient.post(`${environment.api}/product`, this.filtroRequest)
      .subscribe({

        next: async (value: any) => {
          this.products = [...this.products, ...value];

          this.page = this.page + 1;
          this.fetching = false;
          this.spinner.hide()
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

  addCart(cod_produto: string, quantity: number, e:any){
    this.renderer.addClass(e.target,'uk-animation-fade')
    e.srcElement.innerHTML = "PRODUTO ADICIONADO"
    setTimeout(() => {
      e.srcElement.innerHTML = "ADICIONAR NO CARRINHO"
    }, 1500)

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
