import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../services/web3/web3.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectWalletDialogComponent } from '../../dialogs/connect-wallet-dialog/connect-wallet-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    public web3: Web3Service,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  // 打开链接钱包弹窗
  connect(): void {
    if (this.web3.userAccount) {
      return;
    }
    this.dialog.open(ConnectWalletDialogComponent);
  }
  // 打开提取代币弹窗
  claim(): void {
    this.dialog.open(ConnectWalletDialogComponent);
  }
}
