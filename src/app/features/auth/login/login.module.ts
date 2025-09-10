// src/app/features/auth/login/login.module.ts
import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page'; // componente standalone

@NgModule({
  // No 'declarations' para standalone.
  // Importa el routing + el propio componente.
  imports: [LoginPageRoutingModule, LoginPage],
})
export class LoginPageModule {}
