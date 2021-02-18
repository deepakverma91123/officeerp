import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriComponent } from './seri.component';

describe('SeriComponent', () => {
  let component: SeriComponent;
  let fixture: ComponentFixture<SeriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
