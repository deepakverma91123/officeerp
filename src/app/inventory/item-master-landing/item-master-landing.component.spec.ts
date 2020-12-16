import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMasterLandingComponent } from './item-master-landing.component';

describe('ItemMasterLandingComponent', () => {
  let component: ItemMasterLandingComponent;
  let fixture: ComponentFixture<ItemMasterLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMasterLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMasterLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
