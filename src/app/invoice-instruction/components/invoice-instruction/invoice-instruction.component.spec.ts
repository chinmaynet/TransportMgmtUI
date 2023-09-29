import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInstructionComponent } from './invoice-instruction.component';

describe('InvoiceInstructionComponent', () => {
  let component: InvoiceInstructionComponent;
  let fixture: ComponentFixture<InvoiceInstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceInstructionComponent]
    });
    fixture = TestBed.createComponent(InvoiceInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
