import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateOrderComponent} from "./component/create-order/create-order.component";
import {CoffeeVarietyListComponent} from "./component/coffee-variety-list/coffee-variety-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wellink Coffee Shop';

  constructor(private dialog: MatDialog) {
  }

  openDialogOrderCreate() {
    this.dialog.open(CreateOrderComponent, {
      width: '30%'
    });
  }

  openDialogCoffeeVariety() {
    this.dialog.open(CoffeeVarietyListComponent, {
      width: '30%'
    });
  }
}
