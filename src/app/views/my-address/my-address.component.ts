import { environment } from './../../../environments/environment';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SocialLoginService } from '../../shared/services/social-login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import { CepService } from 'src/app/shared/services/cep.service';
import { HttpClient } from '@angular/common/http';
import { IAccountAdress } from 'src/app/model/account.model';


@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit{


address : IAccountAdress [] = [];


  constructor(
    private location: Location,
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
  voltar() {
    this.location.back()
    this.spinner.show()
    this.spinner.hide()

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
