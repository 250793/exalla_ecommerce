import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeactivateAccountRoutingModule } from './deactivate-account-routing.module';
import { DeactivateAccountComponent } from './deactivate-account.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DeactivateAccountComponent
  ],
  imports: [
    CommonModule,
    DeactivateAccountRoutingModule,
    SharedModule
  ]
})
export class DeactivateAccountModule { }
