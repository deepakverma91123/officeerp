import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSheetRegisterComponent } from './pending-sheet-register.component';

describe('PendingSheetRegisterComponent', () => {
  let component: PendingSheetRegisterComponent;
  let fixture: ComponentFixture<PendingSheetRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingSheetRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSheetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
