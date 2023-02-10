import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasComponent } from './ofertas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    OfertasComponent,

  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    SharedModule,
    RouterModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ]
})
export class OfertasModule { }
