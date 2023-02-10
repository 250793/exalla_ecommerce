import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    CartComponent,

  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    RouterModule,
    NgxSpinnerModule,
    SharedModule,
    NgxMaskModule.forChild(),


  ]
})
export class CartModule { }
