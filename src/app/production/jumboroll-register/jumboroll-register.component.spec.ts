import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumborollRegisterComponent } from './jumboroll-register.component';

describe('JumborollRegisterComponent', () => {
  let component: JumborollRegisterComponent;
  let fixture: ComponentFixture<JumborollRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumborollRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumborollRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
