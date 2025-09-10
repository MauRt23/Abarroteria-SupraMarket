import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule],
})
export class ForgotPage {
  loading = false;
  sent = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  get emailCtrl() {
    return this.form.get('email');
  }

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.loading = true;

    try {
      const email = this.emailCtrl?.value?.trim() || '';
      // TODO: aquí llama a tu servicio real de auth para enviar el correo:
      // await this.authService.sendPasswordReset(email);
      await new Promise(res => setTimeout(res, 900)); // simulación
      this.sent = true;
    } catch (e) {
      console.error('Forgot error', e);
      // Puedes mostrar un toast/alert aquí si quieres
    } finally {
      this.loading = false;
    }
  }
}
