import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineMenuComponent } from './nine-menu.component';

describe('NineMenuComponent', () => {
  let component: NineMenuComponent;
  let fixture: ComponentFixture<NineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
