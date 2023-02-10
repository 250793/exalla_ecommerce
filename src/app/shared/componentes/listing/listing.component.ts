import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';
import { ListaProduto } from '../../../model/listaproduto.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

   products: ListaProduto[] = [];


  constructor(
    private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.HttpClient.post(`${environment.api}/product`,{
      limit:10,
    })
    .subscribe({
      next: (value:any) => {
        this.products = value;
      }
    })
  }
   loadImage(source: string) {
    return source;
  }

}
