import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashflowPage } from './cashflow.page';

const routes: Routes = [
  {
    path: '',
    component: CashflowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashflowPageRoutingModule {}
