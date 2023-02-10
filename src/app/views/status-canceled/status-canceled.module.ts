import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCanceledRoutingModule } from './status-canceled-routing.module';
import { StatusCanceledComponent } from './status-canceled.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StatusCanceledComponent
  ],
  imports: [
    CommonModule,
    StatusCanceledRoutingModule,
    SharedModule
  ]
})
export class StatusCanceledModule { }
