import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListaProduto } from '../../../model/listaproduto.model';
import { NavigationEnd, Router } from '@angular/router';
import { SocialLoginService } from '../../services/social-login.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { handle } from '../../utils/cpf-validator-validator';


@Component({
  selector: 'app-pick-slide',
  templateUrl: './pick-slide.component.html',
  styleUrls: ['./pick-slide.component.scss']
})
export class PickSlideComponent implements OnInit, AfterViewInit {

  products: ListaProduto[] = []

  @ViewChild('image')
  image: any;

  @Input()
  path!: string;

  @Input()
  limit!: string;

  @Input()
  id_home!: string;

  @Input()
  rota!: string;

  @Input()
  brand!: string;



  constructor(
    public renderer: Renderer2,
    private httpClient: HttpClient,
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {
  }

  ngOnInit(): void {
    this.httpClient.post(`${environment.api}/${this.path}`, {
      limit: this.limit,
      id_home: Number(this.id_home),
      descricao_marca: this.brand,
      offers: this.rota === '/ofertas',
    })
      .subscribe({
        next: async (value: any) => {
          this.products = [...this.products, ...value];
        },
      })
  }

  ngAfterViewInit(): void {

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
  }

  redirect(cod_produto: string) {
    this.router.navigate(['/product-details', cod_produto])
    // .then(() => location.reload())
  }
  addCart(cod_produto: string, quantity: number, e: any) {
    this.renderer.addClass(e.target,'uk-animation-fade')
    e.srcElement.innerHTML = "PRODUTO ADICIONADO"
    setTimeout(() => {
      e.srcElement.innerHTML = "ADICIONAR NO CARRINHO"
    }, 1500)


    this.carrinhoService
      .createProduct(cod_produto, quantity, '+')
      .subscribe({
        next: (value: any) => {
          localStorage.setItem('cod_carrinho', value.cod_carrinho)

          this.carrinhoService.update()


        }

      })
  }




}
