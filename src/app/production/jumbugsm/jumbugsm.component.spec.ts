import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbugsmComponent } from './jumbugsm.component';

describe('JumbugsmComponent', () => {
  let component: JumbugsmComponent;
  let fixture: ComponentFixture<JumbugsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbugsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbugsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
