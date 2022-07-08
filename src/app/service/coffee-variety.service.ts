import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../model/order";
import {CoffeeVariety} from "../model/coffee-variety";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoffeeVarietyService {

  private baseURL = "http://localhost:8080/coffee_shop/api/v1/variety";
  private getAvailableCoffeeVarietiesURL = this.baseURL + "/available";

  constructor(private httpClient: HttpClient) { }

  getCoffeeVarietyList(): Observable<CoffeeVariety[]> {
    return this.httpClient.get<CoffeeVariety[]>(`${this.getAvailableCoffeeVarietiesURL}`);
  }
}
