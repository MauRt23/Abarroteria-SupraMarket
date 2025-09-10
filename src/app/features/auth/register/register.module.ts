// src/app/features/auth/register/register.module.ts
import { NgModule } from '@angular/core';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page'; // componente standalone

@NgModule({
  // Sin 'declarations' ni Common/Forms/Ionic aquí.
  // Solo importas el routing y el propio componente.
  imports: [RegisterPageRoutingModule, RegisterPage],
})
export class RegisterPageModule {}
