import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreschVeganComponent } from './fresch-vegan.component';

const routes: Routes = [{ path: '', component: FreschVeganComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreschVeganRoutingModule { }
