import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupCargoComponent } from './pickup-cargo.component';

describe('PickupCargoComponent', () => {
  let component: PickupCargoComponent;
  let fixture: ComponentFixture<PickupCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickupCargoComponent]
    });
    fixture = TestBed.createComponent(PickupCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
