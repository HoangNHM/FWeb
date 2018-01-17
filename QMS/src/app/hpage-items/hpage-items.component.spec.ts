import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpageItemsComponent } from './hpage-items.component';

describe('HpageItemsComponent', () => {
  let component: HpageItemsComponent;
  let fixture: ComponentFixture<HpageItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpageItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
