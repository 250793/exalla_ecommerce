import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IAccountAdress } from 'src/app/model/account.model';
import { SocialLoginService } from '../../services/social-login.service';
import { CepService } from '../../services/cep.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meus-enderecos',
  templateUrl: './meus-enderecos.component.html',
  styleUrls: ['./meus-enderecos.component.scss']
})
export class MeusEnderecosComponent implements OnInit {


  address : IAccountAdress [] = [];


    constructor(

      private spinner: NgxSpinnerService,
      public socialLoginService : SocialLoginService,
      private cepService:CepService,
      private httpClient: HttpClient,

    ) { }


    ngOnInit(): void {
      this.buscarEnderecos();
    }
    buscarEnderecos(){
      this.httpClient.get(`${environment.api}/account/address`)
      .subscribe({
          next: (value:any) => {
            this.address = value
        },

      })
    }
    consultaCep(valor:any,form:any){
      this.cepService.buscarCep(valor)

      .subscribe((dados) => this.populaForm(dados, form));
        }

        populaForm(dados:any,form:any){
          form.setValue({
            cep:dados.cep,
            logradouro:dados.logradouro,
            bairro:dados.bairro,
            cidade:dados.localidade,
            uf:dados.uf
          })
        }
        applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          return filterValue;
      }

      deletar(cod_endereco: number){

        this.httpClient.delete(`${environment.api}/account/address`, {
          body: {
            cod_endereco,
          }
        }).subscribe({
          next: () => {
            this.address = this.address.filter(value => value.cod_endereco !== cod_endereco)
          }
        })
      }
      salveForm(e:any){
        this.httpClient.post(`${environment.api}/account/address`,e).subscribe({
          next:(value) => {
             if(value){
              this.buscarEnderecos();
             }
          },
        })

      }
      editForm(e:any){
        this.httpClient.patch(`${environment.api}/account/address`,e).subscribe({
          next:(value) => {
             if(value){
              this.buscarEnderecos();
             }
          },
        })
      }
      mudarPadrao(cod_endereco:any){
        this.httpClient.put(`${environment.api}/account/address`, {
          cod_endereco
        }).subscribe({
          complete:() => {
              this.buscarEnderecos();
          },
        })
      }
  }
