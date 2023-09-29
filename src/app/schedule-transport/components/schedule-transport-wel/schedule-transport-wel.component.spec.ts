import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTransportWelComponent } from './schedule-transport-wel.component';

describe('ScheduleTransportWelComponent', () => {
  let component: ScheduleTransportWelComponent;
  let fixture: ComponentFixture<ScheduleTransportWelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleTransportWelComponent]
    });
    fixture = TestBed.createComponent(ScheduleTransportWelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
