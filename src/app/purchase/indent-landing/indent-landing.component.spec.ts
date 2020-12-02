import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentLandingComponent } from './indent-landing.component';

describe('IndentLandingComponent', () => {
  let component: IndentLandingComponent;
  let fixture: ComponentFixture<IndentLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
