// src/app/features/auth/forgot/forgot.module.ts
import { NgModule } from '@angular/core';
import { ForgotPageRoutingModule } from './forgot-routing.module';
import { ForgotPage } from './forgot.page'; // componente standalone

@NgModule({
  // En componentes standalone NO se usan 'declarations'.
  // Se importa el componente en 'imports'.
  imports: [ForgotPageRoutingModule, ForgotPage],
})
export class ForgotPageModule {}
