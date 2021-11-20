import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../services/web3/web3.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-network-tip',
  templateUrl: './network-tip.component.html',
  styleUrls: ['./network-tip.component.scss'],
})
export class NetworkTipComponent implements OnInit {
  constructor(public web3: Web3Service, public translate: TranslateService) {}

  ngOnInit(): void {}
}
