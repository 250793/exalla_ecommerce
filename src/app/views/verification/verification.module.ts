import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponent } from './verification.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VerificationComponent
  ],
  imports: [
    CommonModule,
    VerificationRoutingModule,
    SharedModule
  ]
})
export class VerificationModule { }
