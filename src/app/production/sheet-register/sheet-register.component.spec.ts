import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetRegisterComponent } from './sheet-register.component';

describe('SheetRegisterComponent', () => {
  let component: SheetRegisterComponent;
  let fixture: ComponentFixture<SheetRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
