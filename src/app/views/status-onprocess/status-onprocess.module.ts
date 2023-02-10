import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusOnprocessRoutingModule } from './status-onprocess-routing.module';
import { StatusOnprocessComponent } from './status-onprocess.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StatusOnprocessComponent
  ],
  imports: [
    CommonModule,
    StatusOnprocessRoutingModule,
    SharedModule
  ]
})
export class StatusOnprocessModule { }
