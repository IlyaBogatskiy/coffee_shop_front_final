import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders?: Order[];

  constructor(private orderService: OrderService, private route: Router) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.orderService.getOrderList().subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrderById(id: number) {
    this.orderService.deleteOrderById(id).subscribe(data => {
      console.log(data);
      this.getOrders();
    });
  }

  orderDetails(id: number) {
    this.route.navigate(['order-details', id]);
  }
}
