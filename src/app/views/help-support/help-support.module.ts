import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpSupportRoutingModule } from './help-support-routing.module';
import { HelpSupportComponent } from './help-support.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HelpSupportComponent
  ],
  imports: [
    CommonModule,
    HelpSupportRoutingModule,
    SharedModule
  ]
})
export class HelpSupportModule { }
