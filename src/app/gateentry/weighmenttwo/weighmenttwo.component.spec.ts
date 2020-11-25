import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighmenttwoComponent } from './weighmenttwo.component';

describe('WeighmenttwoComponent', () => {
  let component: WeighmenttwoComponent;
  let fixture: ComponentFixture<WeighmenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighmenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighmenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
