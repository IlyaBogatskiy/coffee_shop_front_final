import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = "http://localhost:8080/coffee_shop/api/v1/order";
  private createOrderURL = "http://localhost:8080/coffee_shop/api/v1/order/create";

  constructor(private httpClient: HttpClient) {
  }

  getOrderList(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.baseURL}`);
  }

  createOrder(order: Order): Observable<Order> {
    console.log(order);
    return this.httpClient.post<Order>(`${this.createOrderURL}`, order);
  }

  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.baseURL}/${id}`);
  }

  deleteOrderById(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
