import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
  IonInput, IonButtons, IonBackButton, IonButton, IonToast, IonAvatar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,
    IonInput, IonButtons, IonBackButton, IonButton, IonToast, IonAvatar
  ]
})
export class RegisterPage {
  model = {
    nombre: '', apellidoP: '', apellidoM: '',
    email: '', telefono: '',
    password: '', confirm: '',
    calle: '', numero: '', colonia: '',
    ciudad: '', estado: '', cp: ''
  };

  // --- Foto de perfil ---
  avatarPreview: string | null = null;    // DataURL para previsualizar
  private avatarFile: File | null = null; // archivo seleccionado

  submitted = false;
  toastOpen = false;

  constructor(private router: Router) {}

  /** Validaciones básicas */
  get valid(): boolean {
    const m = this.model;
    const allFilled = Object.values(m).every(v => String(v).trim().length > 0);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email);
    const phoneOk = /^[0-9\s+\-()]{7,}$/.test(m.telefono);
    const passOk = m.password.length >= 8 && m.password === m.confirm;
    const cpOk = /^\d{5}$/.test(m.cp);
    return allFilled && emailOk && phoneOk && passOk && cpOk;
  }

  // --- Manejo de avatar ---
  openFilePicker(input: HTMLInputElement) {
    input.click();
  }

  onFileSelected(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Selecciona una imagen válida.');
      return;
    }
    this.avatarFile = file;

    const reader = new FileReader();
    reader.onload = () => (this.avatarPreview = reader.result as string);
    reader.readAsDataURL(file);
  }

  clearAvatar() {
    this.avatarFile = null;
    this.avatarPreview = null;
  }

  cancel(): void {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  submit(f: NgForm): void {
    this.submitted = true;
    if (!this.valid) return;

    // Aquí podrías subir `this.avatarFile` a tu backend si lo necesitaras.
    this.toastOpen = true;
    setTimeout(() => {
      this.router.navigateByUrl('/login', { replaceUrl: true, state: { accountCreated: true } });
    }, 900);
  }
}
