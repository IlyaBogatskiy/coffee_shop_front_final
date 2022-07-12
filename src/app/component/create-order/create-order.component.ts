import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {OrderItem} from "../../model/order-item";
import {OrderService} from "../../service/order.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {OrderListComponent} from "../order-list/order-list.component";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  order: Order = new Order();
  orderItem: OrderItem = new OrderItem();
  orderItems?: OrderItem[];

  constructor(private orderService: OrderService,
              private router: Router,
              private ref: MatDialogRef<CreateOrderComponent>) {}

  ngOnInit(): void {
  }

  createOrder() {
    this.orderService.createOrder(
      this.order = {
        id: this.order.id,
        orderDate: new Date,
        customerName: this.order.customerName,
        deliveryAddress: this.order.deliveryAddress,
        orderItems: this.orderItems = [
          {
            id: this.orderItem.id,
            coffeeVarietyId: this.orderItem.coffeeVarietyId,
            cups: this.orderItem.cups,
            orderItemPrice: this.orderItem.orderItemPrice
          }
        ],
        orderPrice: this.order.orderPrice
      },
    ).subscribe(data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.order);
    console.log(this.orderItem);
    this.createOrder();
    this.ref.close('save');
  }

  // goToOrderList() {
  //   this.router.navigate(['/orders']);
  // }
}
