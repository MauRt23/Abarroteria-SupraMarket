import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonList, IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonToast
} from '@ionic/angular/standalone';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-card-form',
  standalone: true,
  templateUrl: './card-form.page.html',
  styleUrls: ['./card-form.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonList, IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonToast
  ]
})
export class CardFormPage {
  total = Number(history.state?.total ?? 0);
  loading = false;
  toastOpen = false;

  data = {
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  };

  constructor(private router: Router, private cart: CartService) {}

  // Validaciones simples
  get numberOk() { return /^\d{16}$/.test(this.data.number.replace(/\s+/g, '')); }
  get expiryOk() { return /^(0[1-9]|1[0-2])\/\d{2}$/.test(this.data.expiry); }
  get cvvOk()    { return /^\d{3,4}$/.test(this.data.cvv); }
  get formOk()   { return this.data.name && this.numberOk && this.expiryOk && this.cvvOk; }

  async submit(f: NgForm) {
    if (!this.formOk) return;

    this.loading = true;
    await new Promise(r => setTimeout(r, 1000)); // Simula procesamiento
    try { this.cart.clear(); } catch {}
    this.loading = false;
    this.toastOpen = true;

    // Regresa a /checkout con un “flag” de éxito para mostrar el toast allí también si quieres
    setTimeout(() => {
      this.router.navigateByUrl('/checkout', { replaceUrl: true, state: { paid: true } });
    }, 800);
  }
}
