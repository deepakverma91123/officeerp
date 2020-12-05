import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelcuttingReportComponent } from './reelcutting-report.component';

describe('ReelcuttingReportComponent', () => {
  let component: ReelcuttingReportComponent;
  let fixture: ComponentFixture<ReelcuttingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelcuttingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelcuttingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
