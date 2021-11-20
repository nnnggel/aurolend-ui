import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkTipComponent } from './network-tip.component';

describe('NetworkTipComponent', () => {
  let component: NetworkTipComponent;
  let fixture: ComponentFixture<NetworkTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
