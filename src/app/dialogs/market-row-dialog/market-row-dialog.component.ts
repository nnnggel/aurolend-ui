import { Component, Inject, OnInit } from '@angular/core';
import { IToken } from '../../common/interfaces';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Web3Service } from '../../services/web3/web3.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-market-row-dialog',
  templateUrl: './market-row-dialog.component.html',
  styleUrls: ['./market-row-dialog.component.scss'],
})
export class MarketRowDialogComponent implements OnInit {
  loading: boolean = false;
  tabs: number[] = [0, 1, 2, 3];
  tabIndex: number = 0; // 0:supply,1:withdraw,2:borrow,3:repay
  amount: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IToken,
    public web3: Web3Service,
    public dialog: MatDialog,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}
  // 转小写
  toLowerCase(val: string): string {
    return val.toLowerCase();
  }

  // 启用
  enable(): void {
    this.loading = true;
    // supply
    if (this.tabIndex === 0) {
      this.web3.enableSupply();
    }
    // repay
    if (this.tabIndex === 3) {
      this.web3.enableRepay();
    }
  }
  submit(): void {
    this.loading = true;
    // supply
    if (this.tabIndex === 0) {
      this.web3.supply();
    }
  }
}
