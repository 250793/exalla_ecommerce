import { environment } from './../../../environments/environment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaProduto } from 'src/app/model/listaproduto.model';
import { FormGroup } from '@angular/forms';
import { Carrinho, ProductData } from '../../model/carrinho';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { isDefined } from '@ng-bootstrap/ng-bootstrap/util/util';
import { IAccountAdress } from 'src/app/model/account.model';
import { SocialLoginService } from 'src/app/shared/services/social-login.service';
import { CarrinhoService } from '../../shared/services/carrinho.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: Carrinho;
  accountData?: any;
  formCartao!: FormGroup;
  address : IAccountAdress [] = [];
  @ViewChild('qtyButton')
  qtyButton!: ElementRef;



  productsData: ProductData[] = [];
  products: ListaProduto[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public socialLoginService: SocialLoginService,
    public carrinhoService:CarrinhoService
  ) {

  }


  ngOnInit(): void {
    this.iniciar();

    this.httpClient.get(`${environment.api}/account/address`)
    .subscribe({
        next: (value:any) => {
          this.address = value
        },
    })
  }

  iniciar() {

    this.productsData = [];
    this.products = []

    this.carrinhoService.getTotalCarrinho().subscribe({
        next: (value: any) => {
          localStorage.setItem('cod_carrinho', value.cod_carrinho)

          this.productsData = value.products;

          if (value.products.length > 0) {
            let ids = '';

            value.products.forEach((product: any) => {
              if (ids === '') {
                ids = product.cod_produto
              } else {
                ids += `,${product.cod_produto}`
              }
            })

            this.httpClient.post(`${environment.api}/product/`, {
              cod_produto: ids
            }).subscribe({
              next: (products: any) => {
                this.products = products;
              },
            })
          }
        },
      })
  }

  voltar() {
    this.router.navigate([''])
  }

  /*
  Função para adição e subtração do produto
  */
  operation(cod_produto: string, operation: '+' | '-'){
    const product = this.products.find(data => data.cod_produto = cod_produto);

    this.httpClient.post(`${environment.api}/cart/control`, {
      cod_carrinho: localStorage.getItem('cod_carrinho') ?? undefined,
      cod_produto,
      operation,
      quantity: product?.multiplo_venda ?? 1
    }).subscribe({
      complete: () => {
          this.iniciar()
      },
    });
  }

  getDefaultAddress() {
    return this.address.find(address => address.default);
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

  getProductData(cod_produto: string): ProductData {
    const productData = this.productsData.find(data => data.cod_produto === cod_produto);

    return productData ? productData : {
      quantidade: 1,
      cod_produto,
      cod_campanha: undefined
    };
  }

  removeProduto(cod_produto: string) {
    this.httpClient.post(`${environment.api}/cart/remove/`, {
      cod_carrinho: localStorage.getItem('cod_carrinho'),
      cod_produto,
    }).subscribe({

      complete: () => {
        this.iniciar();

        this.carrinhoService.update();
      },
    })
  }
  quantidadeDeProdutos(){
    return this.productsData.reduce(
      (currentValue, data) => currentValue + data.quantidade,
      0
    )
  }
  valoresDosProdutos(){
    return this.products.reduce(
      (currentValue, product) => {
        const productData = this.getProductData(product.cod_produto)

        return currentValue + (product.preco_tabela * productData.quantidade)
      },
      0
    );
  }

  valorDeDesconto(){
    return this.products.reduce(
      (currentValue, product) => {
        const ProductData = this.getProductData(product.cod_produto)

        return currentValue + ((product.preco_tabela - product.preco_venda) * ProductData.quantidade)

      },
      0
    )
  }
  valorTotal(){
    return this.valoresDosProdutos() - this.valorDeDesconto() + 15
  }
}
