import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf, NgFor, DecimalPipe } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
  IonButton, IonThumbnail, IonFooter, IonButtons, IonBackButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  imports: [
    CommonModule, NgIf, NgFor, DecimalPipe, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
    IonButton, IonThumbnail, IonFooter, IonButtons, IonBackButton, IonIcon
  ]
})
export class CartPage {
  /** id del producto que se está “removiendo” para activar la animación */
  removingId: string | null = null;

  constructor(public cart: CartService) {
    addIcons({ closeOutline });
  }

  inc(id: string) { this.cart.inc(id); }
  dec(id: string) { this.cart.dec(id); }

  /** Compatibilidad si algún lugar aún llama remove() directo */
  remove(id: string) { this.removeWithAnim(id); }

  /** Hace la animación y después elimina del carrito */
  removeWithAnim(id: string) {
    if (this.removingId) return;          // evita dobles clics durante la animación
    this.removingId = id;
    setTimeout(() => {
      this.cart.remove(id);
      this.removingId = null;
    }, 280);                               // debe coincidir con la duración del CSS
  }

  get total() { return this.cart.total(); }
  get empty() { return this.cart.items.length === 0; }
}
