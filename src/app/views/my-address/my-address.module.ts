import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAddressRoutingModule } from './my-address-routing.module';
import { MyAddressComponent } from './my-address.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyAddressComponent,

  ],
  imports: [
    CommonModule,
    MyAddressRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule
  ]
})
export class MyAddressModule { }
