import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Web3Service } from '../../services/web3/web3.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public translate: TranslateService, public web3: Web3Service) {}

  ngOnInit(): void {}
}
