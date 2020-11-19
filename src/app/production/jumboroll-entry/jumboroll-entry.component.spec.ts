import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumborollEntryComponent } from './jumboroll-entry.component';

describe('JumborollEntryComponent', () => {
  let component: JumborollEntryComponent;
  let fixture: ComponentFixture<JumborollEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumborollEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumborollEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
