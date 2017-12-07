import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGeneralPageComponent } from './order-general-page.component';

describe('OrderGeneralPageComponent', () => {
  let component: OrderGeneralPageComponent;
  let fixture: ComponentFixture<OrderGeneralPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderGeneralPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
