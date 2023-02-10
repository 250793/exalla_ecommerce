import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../../../model/departamento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

   departments : Departamento [] = [];

  constructor(
    private router : Router,
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get(`${environment.api}/department`)
    .subscribe({
      next:(value:any) => {
        this.departments = value;
      },
    })
  }

  onClick(cod_grupo: string, cod_subgrupo?: string){
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
}

