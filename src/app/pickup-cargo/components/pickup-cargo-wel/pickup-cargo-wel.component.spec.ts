import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupCargoWelComponent } from './pickup-cargo-wel.component';

describe('PickupCargoWelComponent', () => {
  let component: PickupCargoWelComponent;
  let fixture: ComponentFixture<PickupCargoWelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickupCargoWelComponent]
    });
    fixture = TestBed.createComponent(PickupCargoWelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
