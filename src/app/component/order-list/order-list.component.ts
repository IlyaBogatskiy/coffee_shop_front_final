import {Component, OnInit} from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {CoffeeVarietyListComponent} from "../coffee-variety-list/coffee-variety-list.component";
import {MatDialog} from "@angular/material/dialog";
import {OrderDetailsComponent} from "../order-details/order-details.component";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  dataSource: MatTableDataSource<Order> = new MatTableDataSource();

  page: number = 0;
  totalElements: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(private orderService: OrderService,
              private route: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getOrders({page: "0", size: "10"});
  }

  private getOrders(request: any) {
    this.orderService.getOrderList(request)
      .subscribe(data => {
        this.orders = (data as any)['content'];
        this.totalElements = (data as any)['totalElements'];
      }, error => {
        console.log(error.error.message);
      });
  }

  nextPage(event: PageEvent) {
    const request = {};
    (request as any)['page'] = event.pageIndex.toString();
    (request as any)['size'] = event.pageSize.toString();
    this.getOrders(request);
  }

  deleteOrderById(id: number) {
    this.orderService.deleteOrderById(id)
      .subscribe(data => {
          this.orders = this.orders.filter(order => order.id !== id);
          console.log('Заказ успешно удален!');
        }, error => {
          console.log(error.error.message);
        }
      );
  }

  orderDetails(id: number) {
    this.route.navigate(['order-details', id]);
  }
}
