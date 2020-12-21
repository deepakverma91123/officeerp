import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderEntryComponent } from './sales-order-entry.component';

describe('SalesOrderEntryComponent', () => {
  let component: SalesOrderEntryComponent;
  let fixture: ComponentFixture<SalesOrderEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
