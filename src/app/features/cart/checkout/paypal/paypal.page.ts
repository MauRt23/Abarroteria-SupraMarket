import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonList, IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonToast
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-paypal',
  standalone: true,
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonList, IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonToast
  ]
})
export class PaypalPage {
  total = Number(history.state?.total ?? 0);
  email = '';
  loading = false;
  toastOpen = false;

  constructor(private router: Router, private cart: CartService) {}

  get emailOk() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  async authorize(): Promise<void> {
    if (!this.emailOk) return;
    this.loading = true;
    await new Promise(r => setTimeout(r, 1000)); // simulación de autorización
    try { this.cart.clear(); } catch {}
    this.loading = false;
    this.toastOpen = true;

    setTimeout(() => {
      this.router.navigateByUrl('/checkout', { replaceUrl: true, state: { paid: true } });
    }, 800);
  }
}
