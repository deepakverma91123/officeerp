import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetcuttingEntryComponent } from './sheetcutting-entry.component';

describe('SheetcuttingEntryComponent', () => {
  let component: SheetcuttingEntryComponent;
  let fixture: ComponentFixture<SheetcuttingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetcuttingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetcuttingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
