import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteminformationComponent } from './iteminformation.component';

describe('IteminformationComponent', () => {
  let component: IteminformationComponent;
  let fixture: ComponentFixture<IteminformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteminformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteminformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
