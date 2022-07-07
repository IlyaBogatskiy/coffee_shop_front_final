import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from "./component/order-list/order-list.component";
import {CreateOrderComponent} from "./component/create-order/create-order.component";
import {GetOrderComponent} from "./component/get-order/get-order.component";
import {OrderDetailsComponent} from "./component/order-details/order-details.component";

const routes: Routes = [
  {path:'orders', component: OrderListComponent},
  {path:'create-order', component: CreateOrderComponent},
  {path:'', redirectTo:'orders', pathMatch:'full'},
  {path:'order-details/:id', component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
