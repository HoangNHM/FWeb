import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineMenuEleComponent } from './nine-menu-ele.component';

describe('NineMenuEleComponent', () => {
  let component: NineMenuEleComponent;
  let fixture: ComponentFixture<NineMenuEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineMenuEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineMenuEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
