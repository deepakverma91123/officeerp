import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingConsumptionComponent } from './landing-consumption.component';

describe('LandingConsumptionComponent', () => {
  let component: LandingConsumptionComponent;
  let fixture: ComponentFixture<LandingConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
