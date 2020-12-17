import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumborollLandingComponent } from './jumboroll-landing.component';

describe('JumborollLandingComponent', () => {
  let component: JumborollLandingComponent;
  let fixture: ComponentFixture<JumborollLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumborollLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumborollLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
