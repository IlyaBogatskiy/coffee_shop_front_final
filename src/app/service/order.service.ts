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

  getOrderList(request: any) {
    const params = request;
    return this.httpClient.get(`${this.baseURL}`, {params});
  }

  createOrder(order: Order): Observable<Order> {
    console.log(order);
    return this.httpClient.post<Order>(`${this.createOrderURL}`, order);
  }

  getOrderById(id: number): Observable<Order> {
    console.log(id);
    return this.httpClient.get<Order>(`${this.baseURL}/${id}`);
  }

  deleteOrderById(id: number): Observable<Object> {
    console.log(id);
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
