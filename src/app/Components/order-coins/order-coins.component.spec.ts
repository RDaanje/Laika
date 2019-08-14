import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoinsComponent } from './order-coins.component';

describe('OrderCoinsComponent', () => {
  let component: OrderCoinsComponent;
  let fixture: ComponentFixture<OrderCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
