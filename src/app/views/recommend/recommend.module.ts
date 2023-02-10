import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import { RecommendComponent } from './recommend.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RecommendComponent
  ],
  imports: [
    CommonModule,
    RecommendRoutingModule,
    SharedModule
  ]
})
export class RecommendModule { }
