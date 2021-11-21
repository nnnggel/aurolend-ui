import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MarketRowDialogComponent } from './market-row-dialog.component';
import { EnableTipComponent } from './enable-tip/enable-tip.component';
import { InputAmountComponent } from './input-amount/input-amount.component';
import { TabsComponent } from './tabs/tabs.component';
import { ApyComponent } from './apy/apy.component';
import { BorrowLimitComponent } from './borrow-limit/borrow-limit.component';
import { BottomMsgComponent } from './bottom-msg/bottom-msg.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
    }),
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
  ],
  declarations: [
    MarketRowDialogComponent,
    EnableTipComponent,
    InputAmountComponent,
    TabsComponent,
    ApyComponent,
    BorrowLimitComponent,
    BottomMsgComponent,
  ],
})
export class MarketRowDialogModule {}
