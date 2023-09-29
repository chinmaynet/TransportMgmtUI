import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInstructionWelComponent } from './invoice-instruction-wel.component';

describe('InvoiceInstructionWelComponent', () => {
  let component: InvoiceInstructionWelComponent;
  let fixture: ComponentFixture<InvoiceInstructionWelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceInstructionWelComponent]
    });
    fixture = TestBed.createComponent(InvoiceInstructionWelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
