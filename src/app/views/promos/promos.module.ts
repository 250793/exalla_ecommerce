import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromosRoutingModule } from './promos-routing.module';
import { PromosComponent } from './promos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PromosComponent
  ],
  imports: [
    CommonModule,
    PromosRoutingModule,
    SharedModule
  ]
})
export class PromosModule { }
