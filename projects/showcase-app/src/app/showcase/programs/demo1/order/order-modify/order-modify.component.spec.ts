import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderModifyComponent} from './order-modify.component';

describe('OrderModifyComponent', () => {
  let component: OrderModifyComponent;
  let fixture: ComponentFixture<OrderModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
