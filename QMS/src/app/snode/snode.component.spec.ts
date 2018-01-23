import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryServiceHexagonComponent } from './snode.component';

describe('DeliveryServiceHexagonComponent', () => {
  let component: DeliveryServiceHexagonComponent;
  let fixture: ComponentFixture<DeliveryServiceHexagonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryServiceHexagonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryServiceHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
