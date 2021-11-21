import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowLimitComponent } from './borrow-limit.component';

describe('BorrowLimitComponent', () => {
  let component: BorrowLimitComponent;
  let fixture: ComponentFixture<BorrowLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
