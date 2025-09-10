import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, NgIf, DecimalPipe } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonToast,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonLabel, IonBackButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';
import { MockDataService } from '../../../core/services/mock-data.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  imports: [
    CommonModule, NgIf, DecimalPipe, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonToast,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonLabel, IonBackButton
  ]
})
export class DetailPage {
  p?: Product;
  showToast = false;

  constructor(
    private route: ActivatedRoute,
    private data: MockDataService,
    private cart: CartService,
    private router: Router
  ){
    addIcons({ cartOutline });
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.p = this.data.getProduct(id);
  }

  add(){
    if(!this.p) return;
    this.cart.add(this.p);
    this.showToast = true;            // muestra el toast
    setTimeout(() => this.router.navigate(['/cart']), 600); // navega luego de 0.6s
  }
}
