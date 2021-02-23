import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnevigationComponent } from './topnevigation.component';

describe('TopnevigationComponent', () => {
  let component: TopnevigationComponent;
  let fixture: ComponentFixture<TopnevigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnevigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnevigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
