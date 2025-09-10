import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashflowPageRoutingModule } from './cashflow-routing.module';

import { CashflowPage } from './cashflow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashflowPageRoutingModule
  ],
  declarations: [CashflowPage]
})
export class CashflowPageModule {}
