import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumborollEntryReportComponent } from './jumboroll-entry-report.component';

describe('JumborollEntryReportComponent', () => {
  let component: JumborollEntryReportComponent;
  let fixture: ComponentFixture<JumborollEntryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumborollEntryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumborollEntryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
