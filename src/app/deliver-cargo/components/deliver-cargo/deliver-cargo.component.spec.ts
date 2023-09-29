import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverCargoComponent } from './deliver-cargo.component';

describe('DeliverCargoComponent', () => {
  let component: DeliverCargoComponent;
  let fixture: ComponentFixture<DeliverCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverCargoComponent]
    });
    fixture = TestBed.createComponent(DeliverCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
