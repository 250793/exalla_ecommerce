import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundPaymentRoutingModule } from './refund-payment-routing.module';
import { RefundPaymentComponent } from './refund-payment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RefundPaymentComponent
  ],
  imports: [
    CommonModule,
    RefundPaymentRoutingModule,
    SharedModule
  ]
})
export class RefundPaymentModule { }
