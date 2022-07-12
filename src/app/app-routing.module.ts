import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from "./component/order-list/order-list.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";

const routes: Routes = [
  {path:'orders', component: OrderListComponent},
  // {path:'coffee-varieties', component: CoffeeVarietyListComponent},
  // {path:'create-order', component: CreateOrderComponent},
  {path:'', redirectTo:'orders', pathMatch:'full'},
  {path:'order-details/:id', component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
