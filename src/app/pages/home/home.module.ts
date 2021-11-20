import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { NetworkTipComponent } from '../../components/network-tip/network-tip.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    MatButtonModule,
  ],
  declarations: [HomeComponent, NetworkTipComponent],
})
export class HomeModule {}
