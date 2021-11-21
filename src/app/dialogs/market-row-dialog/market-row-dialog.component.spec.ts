import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRowDialogComponent } from './market-row-dialog.component';

describe('MarketRowDialogComponent', () => {
  let component: MarketRowDialogComponent;
  let fixture: ComponentFixture<MarketRowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketRowDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketRowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
