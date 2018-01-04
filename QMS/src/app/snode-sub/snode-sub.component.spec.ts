import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnodeSubComponent } from './snode-sub.component';

describe('SnodeSubComponent', () => {
  let component: SnodeSubComponent;
  let fixture: ComponentFixture<SnodeSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnodeSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnodeSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
