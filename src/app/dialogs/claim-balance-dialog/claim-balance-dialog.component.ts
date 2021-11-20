import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../services/web3/web3.service';
import { MatDialog } from '@angular/material/dialog';
import { ComputedService } from '../../services/computed/computed.service';

@Component({
  selector: 'app-claim-balance-dialog',
  templateUrl: './claim-balance-dialog.component.html',
  styleUrls: ['./claim-balance-dialog.component.scss'],
})
export class ClaimBalanceDialogComponent implements OnInit {
  loading: boolean = false;
  constructor(
    public web3: Web3Service,
    public dialog: MatDialog,
    public computed: ComputedService
  ) {}

  ngOnInit(): void {}

  // 提取
  submit(): void {
    this.loading = true;
    this.web3.claimSubmit();
  }
}
