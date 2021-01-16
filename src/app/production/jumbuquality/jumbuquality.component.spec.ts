import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbuqualityComponent } from './jumbuquality.component';

describe('JumbuqualityComponent', () => {
  let component: JumbuqualityComponent;
  let fixture: ComponentFixture<JumbuqualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbuqualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbuqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
