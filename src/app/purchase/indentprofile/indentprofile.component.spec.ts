import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentprofileComponent } from './indentprofile.component';

describe('IndentprofileComponent', () => {
  let component: IndentprofileComponent;
  let fixture: ComponentFixture<IndentprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
