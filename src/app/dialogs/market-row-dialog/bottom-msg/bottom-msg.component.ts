import { Component, Input, OnInit } from '@angular/core';
import { IToken } from '../../../common/interfaces';

@Component({
  selector: 'bottom-msg',
  templateUrl: './bottom-msg.component.html',
  styleUrls: ['./bottom-msg.component.scss'],
})
export class BottomMsgComponent implements OnInit {
  @Input() data!: IToken;
  @Input() tabIndex!: number; // 0:supply,1:withdraw,2:borrow,3:repay
  constructor() {}

  ngOnInit(): void {}
}
