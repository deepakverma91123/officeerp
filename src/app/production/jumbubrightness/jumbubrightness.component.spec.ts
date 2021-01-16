import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbubrightnessComponent } from './jumbubrightness.component';

describe('JumbubrightnessComponent', () => {
  let component: JumbubrightnessComponent;
  let fixture: ComponentFixture<JumbubrightnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbubrightnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbubrightnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
