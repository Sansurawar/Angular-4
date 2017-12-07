import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailTabsComponent } from './order-detail-tabs.component';

describe('OrderDetailTabsComponent', () => {
  let component: OrderDetailTabsComponent;
  let fixture: ComponentFixture<OrderDetailTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
