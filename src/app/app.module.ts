import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { FormsModule } from '@angular/forms';
import { GetOrderComponent } from './component/get-order/get-order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderItemComponent } from './component/order-item/order-item.component';
import {OrderItem} from "./model/order-item";
import {Order} from "./model/order";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    CreateOrderComponent,
    GetOrderComponent,
    OrderDetailsComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OrderItem, Order],
  bootstrap: [AppComponent]
})
export class AppModule { }
