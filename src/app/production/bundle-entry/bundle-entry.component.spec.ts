import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleEntryComponent } from './bundle-entry.component';

describe('BundleEntryComponent', () => {
  let component: BundleEntryComponent;
  let fixture: ComponentFixture<BundleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
