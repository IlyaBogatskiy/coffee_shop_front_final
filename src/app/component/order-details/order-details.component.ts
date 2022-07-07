import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../service/order.service";
import {OrderItem} from "../../model/order-item";
import {CoffeeVariety} from "../../model/coffee-variety";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id?: number;
  order?: Order;
  orderItem?: OrderItem;
  coffeeVariety?: CoffeeVariety;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.order = new Order();
    if (this.id != null) {
      this.orderService.getOrderById(this.id).subscribe(data => {
        this.order = data;
      });
    }
  }

}
