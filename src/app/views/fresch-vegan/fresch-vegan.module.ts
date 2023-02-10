import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreschVeganRoutingModule } from './fresch-vegan-routing.module';
import { FreschVeganComponent } from './fresch-vegan.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FreschVeganComponent
  ],
  imports: [
    CommonModule,
    FreschVeganRoutingModule,
    SharedModule
  ]
})
export class FreschVeganModule { }
