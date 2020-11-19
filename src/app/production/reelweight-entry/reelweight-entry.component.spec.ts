import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelweightEntryComponent } from './reelweight-entry.component';

describe('ReelweightEntryComponent', () => {
  let component: ReelweightEntryComponent;
  let fixture: ComponentFixture<ReelweightEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelweightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelweightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
