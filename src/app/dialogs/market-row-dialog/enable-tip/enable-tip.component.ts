import { Component, Input, OnInit } from '@angular/core';
import { IToken } from '../../../common/interfaces';

@Component({
  selector: 'enable-tip',
  templateUrl: './enable-tip.component.html',
  styleUrls: ['./enable-tip.component.scss'],
})
export class EnableTipComponent implements OnInit {
  @Input() data!: IToken;
  constructor() {}

  ngOnInit(): void {}
  // 转小写
  toLowerCase(val: string): string {
    return val.toLowerCase();
  }
}
