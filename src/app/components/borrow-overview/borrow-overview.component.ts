import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../services/web3/web3.service';

@Component({
  selector: 'app-borrow-overview',
  templateUrl: './borrow-overview.component.html',
  styleUrls: ['./borrow-overview.component.scss'],
})
export class BorrowOverviewComponent implements OnInit {
  netApyDetailVisible: boolean = false; // 是否显示net apy详情
  constructor(public web3: Web3Service) {}

  ngOnInit(): void {}
}
