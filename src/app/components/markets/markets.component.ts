import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Web3Service } from '../../services/web3/web3.service';
import { MatDialog } from '@angular/material/dialog';
import { ComputedService } from '../../services/computed/computed.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss'],
})
export class MarketsComponent implements OnInit {
  displayedColumns: string[] = [
    'token',
    'supplyAPY',
    'borrowAPY',
    'wallet',
    'liquidity',
  ];
  constructor(
    public translate: TranslateService,
    public web3: Web3Service,
    public dialog: MatDialog,
    public computed: ComputedService
  ) {}

  ngOnInit(): void {}
  // 转小写
  toLowerCase(val: string): string {
    return val.toLowerCase();
  }
}
