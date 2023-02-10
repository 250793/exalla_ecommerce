import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusCanceledComponent } from './status-canceled.component';

const routes: Routes = [{ path: '', component: StatusCanceledComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusCanceledRoutingModule { }
