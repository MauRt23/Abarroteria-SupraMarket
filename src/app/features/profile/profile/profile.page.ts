import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
  IonInput, IonButton, IonAvatar, IonButtons, IonToast, IonIcon, IonBackButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { personCircleOutline, logOutOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
    IonInput, IonButton, IonAvatar, IonButtons, IonToast, IonIcon, IonBackButton
  ]
})
export class ProfilePage {
  name = 'Cliente Demo';
  email = 'cliente@demo.com';
  phone = '55 1234 5678';
  address = 'Calle Siempre Viva 742';
  showToast = false;

  constructor(private router: Router) {
    addIcons({ personCircleOutline, logOutOutline });
  }

  save(): void {
    this.showToast = true; // mock
  }

  logout(): void {
    localStorage.removeItem('logged');            // “cierra sesión” simulada
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
