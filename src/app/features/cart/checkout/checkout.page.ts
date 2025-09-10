import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
  IonCard, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio,
  IonSpinner, IonToast, IonIcon, IonButtons, IonBackButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { cashOutline, cardOutline, logoPaypal } from 'ionicons/icons';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  imports: [
    CommonModule, FormsModule, CurrencyPipe,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton,
    IonCard, IonList, IonItem, IonLabel, IonRadioGroup, IonRadio,
    IonSpinner, IonToast, IonIcon, IonButtons, IonBackButton
  ]
})
export class CheckoutPage {
  method: 'cash' | 'card' | 'paypal' | null = null;
  submitted = false;
  loading = false;
  toastOpen = false;

  /** Total del carrito en esta pantalla */
  private totalAmount = 0;

  constructor(public cart: CartService, private router: Router) {
    addIcons({ cashOutline, cardOutline, logoPaypal });
  }

  /** Cada vez que entras, lee el total del servicio (misma instancia) */
  ionViewWillEnter() {
    this.totalAmount = this.cart.total();
  }

  /** Getter para no tener que tocar tu template si usa {{ total }} */
  get total(): number {
    return this.totalAmount;
  }

  async pay(): Promise<void> {
    this.submitted = true;
    if (!this.method) return;

    // Tarjeta o PayPal: manda el total a la ruta correspondiente
    if (this.method === 'card') {
      this.router.navigate(['/checkout', 'card'], { state: { total: this.totalAmount } });
      return;
    }
    if (this.method === 'paypal') {
      this.router.navigate(['/checkout', 'paypal'], { state: { total: this.totalAmount } });
      return;
    }

    // Efectivo: cobro simulado y limpieza
    this.loading = true;
    await new Promise(res => setTimeout(res, 900));
    this.cart.clear();
    this.loading = false;
    this.toastOpen = true;
  }
}
