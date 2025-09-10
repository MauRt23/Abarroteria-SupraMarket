import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashflowPage } from './cashflow.page';

describe('CashflowPage', () => {
  let component: CashflowPage;
  let fixture: ComponentFixture<CashflowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CashflowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
