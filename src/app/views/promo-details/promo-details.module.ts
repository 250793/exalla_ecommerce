import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoDetailsRoutingModule } from './promo-details-routing.module';
import { PromoDetailsComponent } from './promo-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    PromoDetailsComponent
  ],
  imports: [
    CommonModule,
    PromoDetailsRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class PromoDetailsModule { }
