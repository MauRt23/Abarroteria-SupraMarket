import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgFor, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 necesario para [(ngModel)]
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBadge,
  IonSearchbar, IonChip, IonLabel, IonFab, IonFabButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, addOutline } from 'ionicons/icons';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  imports: [
    // Angular
    CommonModule, NgFor, DecimalPipe, FormsModule, RouterLink,
    // Ionic
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBadge,
    IonSearchbar, IonChip, IonLabel, IonFab, IonFabButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class ListPage {
  products: Product[] = [];
  filtered: Product[] = [];
  categories: string[] = [];
  q = '';
  activeCat = 'Todos';

  constructor(
    private data: MockDataService,
    private cart: CartService,
    private router: Router
  ){
    addIcons({ cartOutline, addOutline });
  }

  ionViewWillEnter() {
    this.products = this.data.getProducts();
    this.categories = ['Todos', ...Array.from(new Set(this.products.map(p => p.category || ''))) ];
    this.applyFilter();
  }

  applyFilter() {
    const q = this.q.toLowerCase();
    this.filtered = this.products.filter(p => {
      const byText = p.name.toLowerCase().includes(q) || (p.category||'').toLowerCase().includes(q);
      const byCat  = this.activeCat === 'Todos' || p.category === this.activeCat;
      return byText && byCat;
    });
  }

  setCat(cat:string){ this.activeCat = cat; this.applyFilter(); }

  addToCart(p: Product, ev?: Event) {
    ev?.stopPropagation();
    this.cart.add(p);
  }

  open(p: Product) { this.router.navigate(['/product', p.id]); }

  get count(){ return this.cart.count(); }
}

