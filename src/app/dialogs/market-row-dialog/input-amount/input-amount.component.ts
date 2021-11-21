import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IToken } from '../../../common/interfaces';

@Component({
  selector: 'input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss'],
})
export class InputAmountComponent implements OnInit {
  @Input() data!: IToken;
  @Input() tabIndex!: number;
  @Input() amount!: string;
  @Output() amountChange = new EventEmitter<string>();
  amountInput: string = '';
  constructor() {}

  ngOnInit(): void {
    this.amountInput = this.amount;
  }
  // max
  amountMax(): void {
    // supply
    if (this.tabIndex === 0) {
      this.amountInput = this.data.wallet;
      this.amountChange.emit(this.data.wallet);
    }
    // withdraw
    if (this.tabIndex === 1) {
      this.amountInput = this.data.supplyBalance;
      this.amountChange.emit(this.data.supplyBalance);
    }
    // borrow
    if (this.tabIndex === 2) {
      // todo 这里的逻辑需要重写
      this.amountInput = this.data.supplyBalance;
      this.amountChange.emit(this.data.supplyBalance);
    }
  }
  emitAmount(): void {
    this.amountChange.emit(this.amountInput);
  }
}
