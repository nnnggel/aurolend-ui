import { Component, Input, OnInit } from '@angular/core';
import { IToken } from '../../../common/interfaces';

@Component({
  selector: 'apy',
  templateUrl: './apy.component.html',
  styleUrls: ['./apy.component.scss'],
})
export class ApyComponent implements OnInit {
  @Input() data!: IToken;
  @Input() tabIndex!: number;
  constructor() {}

  ngOnInit(): void {}
  // 转小写
  toLowerCase(val: string): string {
    return val.toLowerCase();
  }
}
