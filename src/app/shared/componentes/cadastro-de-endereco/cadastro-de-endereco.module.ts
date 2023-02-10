import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroDeEnderecoComponent } from './cadastro-de-endereco.component';


@NgModule({
  declarations: [
    CadastroDeEnderecoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class CadastroDeEnderecoModule { }
