import { environment } from 'src/environments/environment';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ListaProduto } from '../../../model/listaproduto.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-busca-produtos',
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.scss']
})
export class BuscaProdutosComponent implements OnInit, OnChanges {


  @Input('search') search!: string;
  @Output() filtrar = new EventEmitter<boolean>();

  products: ListaProduto[] = []



  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.httpClient.post(`${environment.api}/product`, {
      limit: 3,
      descricao: this.search,
      cod_produto: this.search,
      codigo_barras: this.search,

    }).subscribe({
      next: (value: any) => {
        this.products = value;

      },
    })
  }

  buscar(route = '/produtos', optional?: string) {
    console.log(route, optional)
    console.log(this.search)
    if (this.search && this.search.length > 0) {
      this.filtrar.emit(true)

      const search = optional ? [route, optional] : [route]
      this.router.navigate(
        search,
        {

          queryParams: {
            ...(!optional && {

              q: this.search

            })
          },

        }
      ).then(() => {
        this.search = "";
console.log(this.search);

      })
    }
  }

  parseValue(value: number): string {
    return Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency'
    }).format(value);
  }
  carrinho() {
    console.log("adicione ao carrinho")
  }

}
