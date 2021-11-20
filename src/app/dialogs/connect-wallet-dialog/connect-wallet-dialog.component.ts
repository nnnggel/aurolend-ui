import { Component, OnDestroy, OnInit } from '@angular/core';
import { Web3Service } from '../../services/web3/web3.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-connect-wallet-dialog',
  templateUrl: 'connect-wallet-dialog.component.html',
  styleUrls: ['./connect-wallet-dialog.component.scss'],
})
export class ConnectWalletDialogComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  connecting: boolean = false; // 是否正在连接
  constructor(
    public web3: Web3Service,
    private dialogRef: MatDialogRef<ConnectWalletDialogComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this.web3.network$.subscribe((value: number) => {
      if (value) {
        this.dialogRef.close();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // 连接Metamask
  async connectMetamask(): Promise<void> {
    try {
      this.connecting = true;
      await this.web3.connectMetamask();
      this.dialogRef.close();
    } catch (e) {
      console.log(e);
    }
  }
}
