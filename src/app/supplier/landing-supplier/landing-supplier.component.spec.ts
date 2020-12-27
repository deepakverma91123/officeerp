import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSupplierComponent } from './landing-supplier.component';

describe('LandingSupplierComponent', () => {
  let component: LandingSupplierComponent;
  let fixture: ComponentFixture<LandingSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
