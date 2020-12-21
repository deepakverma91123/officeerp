import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMrnEntryComponent } from './sales-mrn-entry.component';

describe('SalesMrnEntryComponent', () => {
  let component: SalesMrnEntryComponent;
  let fixture: ComponentFixture<SalesMrnEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMrnEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMrnEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
