import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReemEntryComponent } from './reem-entry.component';

describe('ReemEntryComponent', () => {
  let component: ReemEntryComponent;
  let fixture: ComponentFixture<ReemEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReemEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReemEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
