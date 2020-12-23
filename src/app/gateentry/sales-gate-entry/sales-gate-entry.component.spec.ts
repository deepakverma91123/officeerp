import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGateEntryComponent } from './sales-gate-entry.component';

describe('SalesGateEntryComponent', () => {
  let component: SalesGateEntryComponent;
  let fixture: ComponentFixture<SalesGateEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGateEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
