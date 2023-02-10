import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAddressComponent } from './my-address.component';

const routes: Routes = [{ path: '', component: MyAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAddressRoutingModule { }
