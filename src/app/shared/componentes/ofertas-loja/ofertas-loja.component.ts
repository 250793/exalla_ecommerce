import { Component, OnInit, ViewChild, AfterViewInit, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListaProduto } from '../../../model/listaproduto.model';

@Component({
  selector: 'app-ofertas-loja',
  templateUrl: './ofertas-loja.component.html',
  styleUrls: ['./ofertas-loja.component.scss']
})
export class OfertasLojaComponent implements OnInit,AfterViewInit {

  products: ListaProduto[] = []

  @ViewChild('image')
  image: any;

  @Input()
  path!: string;

  @Input()
  limit!: string;

  constructor(

    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.post(`${environment.api}/${this.path}`, {
      limit: this.limit,
    })
    .subscribe({
      next:async (value: any) => {
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
    return Intl.NumberFormat('pt-BR',{
      currency: 'BRL',
      style: 'currency'
    }).format(value);
  }

  handleFavorite(p: any) {
  }
}

