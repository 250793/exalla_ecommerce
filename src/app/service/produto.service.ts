import { Injectable } from '@angular/core';
import { ListaProduto } from '../model/listaproduto.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

private readonly API = 'http://localhost:3000/produto'

  constructor(private http: HttpClient) { }
  public getListaProdutos(): Observable<ListaProduto[]> {
    return this.http.get<ListaProduto[]>(`${environment.api}/product`);
  }
}
