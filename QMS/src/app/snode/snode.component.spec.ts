import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnodeComponent } from './snode.component';

describe('SnodeComponent', () => {
  let component: SnodeComponent;
  let fixture: ComponentFixture<SnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
