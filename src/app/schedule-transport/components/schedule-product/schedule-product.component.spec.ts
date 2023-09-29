import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleProductComponent } from './schedule-product.component';

describe('ScheduleProductComponent', () => {
  let component: ScheduleProductComponent;
  let fixture: ComponentFixture<ScheduleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleProductComponent]
    });
    fixture = TestBed.createComponent(ScheduleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
