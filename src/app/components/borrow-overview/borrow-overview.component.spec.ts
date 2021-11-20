import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowOverviewComponent } from './borrow-overview.component';

describe('BorrowOverviewComponent', () => {
  let component: BorrowOverviewComponent;
  let fixture: ComponentFixture<BorrowOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
