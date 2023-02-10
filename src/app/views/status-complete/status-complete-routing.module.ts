import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusCompleteComponent } from './status-complete.component';

const routes: Routes = [{ path: '', component: StatusCompleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusCompleteRoutingModule { }
