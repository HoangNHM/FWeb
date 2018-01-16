import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfCircularMenuComponent } from './half-circular-menu.component';

describe('HalfCircularMenuComponent', () => {
  let component: HalfCircularMenuComponent;
  let fixture: ComponentFixture<HalfCircularMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfCircularMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfCircularMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
