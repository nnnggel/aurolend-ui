import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMsgComponent } from './bottom-msg.component';

describe('WalletBalanceComponent', () => {
  let component: BottomMsgComponent;
  let fixture: ComponentFixture<BottomMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomMsgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
