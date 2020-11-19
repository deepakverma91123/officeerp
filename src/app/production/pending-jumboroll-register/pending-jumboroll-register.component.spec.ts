import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingJumborollRegisterComponent } from './pending-jumboroll-register.component';

describe('PendingJumborollRegisterComponent', () => {
  let component: PendingJumborollRegisterComponent;
  let fixture: ComponentFixture<PendingJumborollRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingJumborollRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingJumborollRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
