import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeVarietyListComponent } from './coffee-variety-list.component';

describe('CoffeeVarietyListComponent', () => {
  let component: CoffeeVarietyListComponent;
  let fixture: ComponentFixture<CoffeeVarietyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeVarietyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeVarietyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
