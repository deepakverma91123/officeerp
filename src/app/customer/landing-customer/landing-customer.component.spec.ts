import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCustomerComponent } from './landing-customer.component';

describe('LandingCustomerComponent', () => {
  let component: LandingCustomerComponent;
  let fixture: ComponentFixture<LandingCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
