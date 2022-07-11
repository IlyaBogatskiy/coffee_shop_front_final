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
import { CoffeeVarietyListComponent } from './component/coffee-variety-list/coffee-variety-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    CreateOrderComponent,
    GetOrderComponent,
    OrderDetailsComponent,
    OrderItemComponent,
    CoffeeVarietyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [OrderItem, Order],
  bootstrap: [AppComponent]
})
export class AppModule { }
