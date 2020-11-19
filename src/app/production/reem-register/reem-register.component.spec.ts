import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReemRegisterComponent } from './reem-register.component';

describe('ReemRegisterComponent', () => {
  let component: ReemRegisterComponent;
  let fixture: ComponentFixture<ReemRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReemRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReemRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
