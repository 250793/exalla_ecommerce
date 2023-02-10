import { environment } from './../../../../environments/environment';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CepService } from '../../services/cep.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IAccountAdress } from 'src/app/model/account.model';

@Component({
  selector: 'app-cadastro-de-endereco',
  templateUrl: './cadastro-de-endereco.component.html',
  styleUrls: ['./cadastro-de-endereco.component.scss']
})
export class CadastroDeEnderecoComponent implements OnInit, OnChanges {

  @Input() changeEdit!: IAccountAdress
  @Output() salveForm: EventEmitter<any> = new EventEmitter;
  @Output() editForm: EventEmitter<any> = new EventEmitter;

  cepForm!: FormGroup;
  constructor(
    private httpClient: HttpClient,
    private cepService: CepService,
    private router: Router,
    private fb: FormBuilder,

  ) {

    this.cepForm = new FormGroup({
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      uf: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      tipo: new FormControl('')
    })


  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.changeEdit) {
      this.cepForm.patchValue({
        cep: this.changeEdit.cep,
        logradouro: this.changeEdit.rua,
        bairro: this.changeEdit.bairro,
        cidade: this.changeEdit.cidade,
        uf: this.changeEdit.uf,
        complemento: this.changeEdit.complemento,
        tipo:this.changeEdit.tipo,
        numero:this.changeEdit.numero
      })
    }
  }
  ngOnInit(): void {
  }
  consultaCep() {
    let valor = this.cepForm.controls['cep'].value
    this.cepService.buscarCep(valor)
      .subscribe({
        next: (dados) => {
          this.populaForm(dados)
        },
        error(err) {
          console.log('cep invalido');
        },
      }
      );
  }
  populaForm(dados: any) {
    this.cepForm.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
      complemento: dados.complemento
    })
  }

  enviarForm() {
    if(this.changeEdit == undefined){
      this.salveForm.emit(this.cepForm.value);
    }
    else{

      this.cepForm.value.cod_endereco = this.changeEdit.cod_endereco
      console.log('Aoooou, chegou aqui', this.cepForm.value);

      this.editForm.emit(this.cepForm.value)
    }

  }

}
