import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCompleteRoutingModule } from './status-complete-routing.module';
import { StatusCompleteComponent } from './status-complete.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StatusCompleteComponent
  ],
  imports: [
    CommonModule,
    StatusCompleteRoutingModule,
    SharedModule
  ]
})
export class StatusCompleteModule { }
