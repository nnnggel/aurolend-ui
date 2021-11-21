import { Component, Input, OnInit } from '@angular/core';
import { Web3Service } from '../../../services/web3/web3.service';

@Component({
  selector: 'borrow-limit',
  templateUrl: './borrow-limit.component.html',
  styleUrls: ['../apy/apy.component.scss', './borrow-limit.component.scss'],
})
export class BorrowLimitComponent implements OnInit {
  @Input() amount!: string;
  constructor(public web3: Web3Service) {}

  ngOnInit(): void {}
}
