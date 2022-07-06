import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private httpClient: HttpClient;

  private allOrdersURL = "http://localhost:8083/coffee_shop/api/v1/order/";
  private createOrderURL = "http://localhost:8083/coffee_shop/api/v1/order/create";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getOrderList(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.allOrdersURL}`);
  }

  createOrder(order: Order): Observable<Order> {
    console.log(order);
    return this.httpClient.post<Order>(`${this.createOrderURL}`, order);
  }
}
