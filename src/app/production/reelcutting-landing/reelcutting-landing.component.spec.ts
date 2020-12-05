import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelcuttingLandingComponent } from './reelcutting-landing.component';

describe('ReelcuttingLandingComponent', () => {
  let component: ReelcuttingLandingComponent;
  let fixture: ComponentFixture<ReelcuttingLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelcuttingLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelcuttingLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
