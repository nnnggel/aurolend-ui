import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableTipComponent } from './enable-tip.component';

describe('EnableTipComponent', () => {
  let component: EnableTipComponent;
  let fixture: ComponentFixture<EnableTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
