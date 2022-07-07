import { Component, OnInit } from '@angular/core';
import {CoffeeVariety} from "../../model/coffee-variety";
import {CoffeeVarietyService} from "../../service/coffee-variety.service";

@Component({
  selector: 'app-coffee-variety-list',
  templateUrl: './coffee-variety-list.component.html',
  styleUrls: ['./coffee-variety-list.component.css']
})
export class CoffeeVarietyListComponent implements OnInit {

  coffeeVarieties: CoffeeVariety[] = [];

  constructor(private coffeeVarietyService: CoffeeVarietyService) { }

  ngOnInit(): void {
    this.getCoffeeVarieties();
  }

  private getCoffeeVarieties() {
    this.coffeeVarietyService.getCoffeeVarietyList().subscribe(data => {
      this.coffeeVarieties = data;
    });
  }
}
