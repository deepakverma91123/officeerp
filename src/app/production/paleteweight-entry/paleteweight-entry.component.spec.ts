import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaleteweightEntryComponent } from './paleteweight-entry.component';

describe('PaleteweightEntryComponent', () => {
  let component: PaleteweightEntryComponent;
  let fixture: ComponentFixture<PaleteweightEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaleteweightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaleteweightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
