import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleloginComponent } from './rolelogin.component';

describe('RoleloginComponent', () => {
  let component: RoleloginComponent;
  let fixture: ComponentFixture<RoleloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
