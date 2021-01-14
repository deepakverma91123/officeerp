import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseregisterComponent } from './purchaseregister.component';

describe('PurchaseregisterComponent', () => {
  let component: PurchaseregisterComponent;
  let fixture: ComponentFixture<PurchaseregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
