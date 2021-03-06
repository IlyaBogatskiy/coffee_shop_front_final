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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";

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
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [OrderItem, Order],
  bootstrap: [AppComponent]
})
export class AppModule { }
