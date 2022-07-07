import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../../model/order";

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.css']
})
export class GetOrderComponent implements OnInit {

  id?: number;
  order: Order = new Order();

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      this.orderService.getOrderById(this.id).subscribe(data => {
          this.order = data;
        },
        error => console.log(error));
    }
  }

}
