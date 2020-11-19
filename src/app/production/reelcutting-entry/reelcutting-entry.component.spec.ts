import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelcuttingEntryComponent } from './reelcutting-entry.component';

describe('ReelcuttingEntryComponent', () => {
  let component: ReelcuttingEntryComponent;
  let fixture: ComponentFixture<ReelcuttingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelcuttingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelcuttingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
