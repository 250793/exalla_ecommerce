import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private emiter = new EventEmitter<boolean>();

  constructor(
    private httpClient:HttpClient,
  ) { }
  getTotalCarrinho(){
   return  this.httpClient.post(`${environment.api}/cart`,
      {
        cod_carrinho: localStorage.getItem('cod_carrinho') ?? ''
      })
  }

  getEmitter() {
    return this.emiter;
  }

  update() {
    this.emiter.emit(true);
  }

  createProduct(cod_produto: string, quantity: number, operation: '+' | '-'){

    return this.httpClient.post(`${environment.api}/cart/control`,
    {
      cod_produto: cod_produto,
      cod_carrinho: localStorage.getItem('cod_carrinho') ?? undefined,
      quantity: quantity,
      operation,
    });
  }
}
