import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpTicketRoutingModule } from './help-ticket-routing.module';
import { HelpTicketComponent } from './help-ticket.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HelpTicketComponent
  ],
  imports: [
    CommonModule,
    HelpTicketRoutingModule,
    SharedModule
  ]
})
export class HelpTicketModule { }
