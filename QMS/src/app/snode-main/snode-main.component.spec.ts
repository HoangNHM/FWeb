import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnodeMainComponent } from './snode-main.component';

describe('SnodeMainComponent', () => {
  let component: SnodeMainComponent;
  let fixture: ComponentFixture<SnodeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnodeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnodeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
