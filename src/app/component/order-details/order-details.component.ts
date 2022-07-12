import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {ActivatedRoute, Router} from "@angular/router";
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
  order: Order;

  constructor(private activateRoute: ActivatedRoute,
              private orderService: OrderService,
              private route: Router,
              order: Order,
  ) {
    this.order = order;
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.order = new Order();
    if (this.id != null) {
      this.orderService.getOrderById(this.id).subscribe(data => {
        this.order = data;
      });
    }
  }

  toOrderList() {
    this.route.navigate(['orders']);
  }
}
