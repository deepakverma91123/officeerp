import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrnEntryComponent } from './mrn-entry.component';

describe('MrnEntryComponent', () => {
  let component: MrnEntryComponent;
  let fixture: ComponentFixture<MrnEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrnEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrnEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
