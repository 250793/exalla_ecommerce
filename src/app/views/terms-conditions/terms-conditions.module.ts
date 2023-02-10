import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
  SharedModule
  ]
})
export class TermsConditionsModule { }
