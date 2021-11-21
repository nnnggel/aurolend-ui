import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { NetworkTipComponent } from '../../components/network-tip/network-tip.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../components/header/header.component';
import { BorrowOverviewComponent } from '../../components/borrow-overview/borrow-overview.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ConnectWalletDialogComponent } from '../../dialogs/connect-wallet-dialog/connect-wallet-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClaimBalanceDialogComponent } from '../../dialogs/claim-balance-dialog/claim-balance-dialog.component';
import { MarketsComponent } from '../../components/markets/markets.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MarketRowDialogModule } from '../../dialogs/market-row-dialog/market-row-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MarketRowDialogModule,
  ],
  declarations: [
    HomeComponent,
    NetworkTipComponent,
    HeaderComponent,
    BorrowOverviewComponent,
    ConnectWalletDialogComponent,
    ClaimBalanceDialogComponent,
    MarketsComponent,
  ],
})
export class HomeModule {}
