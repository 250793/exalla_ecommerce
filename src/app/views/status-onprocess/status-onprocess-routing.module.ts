import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusOnprocessComponent } from './status-onprocess.component';

const routes: Routes = [{ path: '', component: StatusOnprocessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusOnprocessRoutingModule { }
