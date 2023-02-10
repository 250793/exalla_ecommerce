import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoDetailsComponent } from './promo-details.component';

const routes: Routes = [{ path: '', component: PromoDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoDetailsRoutingModule { }
