import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimBalanceDialogComponent } from './claim-balance-dialog.component';

describe('ClaimBalanceDialogComponent', () => {
  let component: ClaimBalanceDialogComponent;
  let fixture: ComponentFixture<ClaimBalanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimBalanceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimBalanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
