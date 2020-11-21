import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndententryReportComponent } from './indententry-report.component';

describe('IndententryReportComponent', () => {
  let component: IndententryReportComponent;
  let fixture: ComponentFixture<IndententryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndententryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndententryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
