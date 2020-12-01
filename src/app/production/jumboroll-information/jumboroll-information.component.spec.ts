import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumborollInformationComponent } from './jumboroll-information.component';

describe('JumborollInformationComponent', () => {
  let component: JumborollInformationComponent;
  let fixture: ComponentFixture<JumborollInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumborollInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumborollInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
