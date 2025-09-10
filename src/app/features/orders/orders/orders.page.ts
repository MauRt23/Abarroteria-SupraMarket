import { Component } from '@angular/core';
import { CommonModule, NgFor, DatePipe, DecimalPipe } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
  IonChip, IonBadge, IonButtons, IonButton, IonIcon, IonRefresher, IonRefresherContent, IonBackButton
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { receiptOutline } from 'ionicons/icons';

type Order = {
  id: string;
  date: string;   // ISO
  items: number;
  total: number;
  status: 'Entregado'|'En camino'|'Pendiente';
};

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  imports: [
    CommonModule, NgFor, DatePipe, DecimalPipe, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
    IonChip, IonBadge, IonButtons, IonButton, IonIcon, IonRefresher, IonRefresherContent, IonBackButton
  ]
})
export class OrdersPage {
  orders: Order[] = [
    { id: 'A-1023', date: '2025-08-28T10:30:00', items: 6,  total: 245, status: 'Entregado' },
    { id: 'A-1024', date: '2025-08-30T17:15:00', items: 3,  total: 112, status: 'En camino' },
    { id: 'A-1025', date: '2025-09-01T12:05:00', items: 10, total: 518, status: 'Pendiente' },
  ];

  constructor(){ addIcons({ receiptOutline }); }

  color(s: Order['status']) {
    return s === 'Entregado' ? 'success' : s === 'En camino' ? 'warning' : 'medium';
  }

  doRefresh(ev: CustomEvent){ setTimeout(() => (ev.target as any).complete(), 600); }
}
