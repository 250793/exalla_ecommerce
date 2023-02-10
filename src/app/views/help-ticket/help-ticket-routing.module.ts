import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpTicketComponent } from './help-ticket.component';

const routes: Routes = [{ path: '', component: HelpTicketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpTicketRoutingModule { }
