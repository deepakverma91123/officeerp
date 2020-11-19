import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingweightEntryComponent } from './packingweight-entry.component';

describe('PackingweightEntryComponent', () => {
  let component: PackingweightEntryComponent;
  let fixture: ComponentFixture<PackingweightEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingweightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingweightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
