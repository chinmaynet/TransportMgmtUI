import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverCargoWelComponent } from './deliver-cargo-wel.component';

describe('DeliverCargoWelComponent', () => {
  let component: DeliverCargoWelComponent;
  let fixture: ComponentFixture<DeliverCargoWelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverCargoWelComponent]
    });
    fixture = TestBed.createComponent(DeliverCargoWelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
