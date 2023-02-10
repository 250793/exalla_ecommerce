import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHomeStructure } from '../../model/home.structure.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { query } from '@angular/animations';

interface IRouteStructure {
  [key: string]: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  structure: IHomeStructure[] = []

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('filtroResquest');
    this.spinner.show()
    this.httpClient.get(`${environment.api}/home`)
      .subscribe({
        next: (value: any) => {
          this.structure = value;
          this.spinner.hide()
        }
      })
  }

  verMais(e: any) {
    if (e.includes('?')) {
      const [route, params] = e.split('?');
      const singleParams = params.split('&');
      const values: IRouteStructure = {};
      if (singleParams) {
        singleParams.forEach(
          (value: any) => {
            const [a, b] = value.split('=');
            values[a] = b;
          }
        )
      }
      this.router.navigate([route], {
        queryParams: {

          ...values
        }
      })
    } else {
      this.router.navigate([e])
    }
  }

}
