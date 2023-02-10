import { environment } from './../../../environments/environment';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaProduto } from '../../model/listaproduto.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import UIkit from 'uikit';
import { NgxSpinnerService } from 'ngx-spinner';
import { Carrinho } from 'src/app/model/carrinho';
import { CarrinhoService } from '../../shared/services/carrinho.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  @ViewChild('imageSource') imagemSource!: ElementRef;
  product!: ListaProduto;
  image!: string;
  cart!:Carrinho;

  @ViewChild('qtyButton')
  qtyButton!: ElementRef;

  constructor(

    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService,
    private carrinhoService: CarrinhoService,
    public renderer :Renderer2
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    })
  }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productCodFromRoute = routeParams.get('cod_produto');

    this.spinner.show()
    this.httpClient.get(`${environment.api}/product/${productCodFromRoute}`)
      .subscribe({
        next: (value: any) => {

          this.product = value;
          this.spinner.hide()
          this.qtyButton.nativeElement.value = this.product.multiplo_venda;
        },
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

  handleImage(image: string) {
    this.image = image;
    UIkit.modal(this.imagemSource.nativeElement).show();
  }

  redirectGroup(cod_grupo: string, cod_subgrupo?: string) {

    this.router.navigate(
      ['/produtos'],
      {
        queryParams: {
          cod_grupo,
          cod_subgrupo
        }
      }
    )
  }

  subGrupo(){
    this.router.navigate(
      ['/produtos'],
      {
        queryParams: {
          descricao_subgrupo:this.subGrupo
        }
      }
    )
  }
  menos(){
    const value = this.qtyButton.nativeElement.value;

    if (!value) return;

    let result = Number(value) - this.product.multiplo_venda;

    if (result < this.product.multiplo_venda) result = this.product.multiplo_venda;

    this.qtyButton.nativeElement.value = result;
  }

  mais() {
    const value = this.qtyButton.nativeElement.value;

    if (!value) return;

    this.qtyButton.nativeElement.value = Number(value) + this.product.multiplo_venda;
  }

  voltar(){
    this.router.navigate(['/produtos'])
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

