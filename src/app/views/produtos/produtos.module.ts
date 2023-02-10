import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { RouterModule } from '@angular/router';
import { FiltroComponent } from 'src/app/shared/componentes/filtro/filtro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [

    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    RouterModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule


  ]
})
export class ProdutosModule { }
