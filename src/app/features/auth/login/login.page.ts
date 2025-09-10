import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

/* 🔽 Firebase */
//import { Auth, signInWithPopup, GoogleAuthProvider, signInAnonymously } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class LoginPage implements OnInit {
  data = { username: '', password: '' };
  mostrarPassword = false;
  loading = false;

  constructor(private router: Router,) {}

  ngOnInit(): void {
    // Si ya “inició sesión” antes, manda directo a catálogo
    if (localStorage.getItem('logged')) {
      this.router.navigateByUrl('/catalog', { replaceUrl: true });
    }
  }

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  agregarEncargado(): void {
    this.router.navigate(['/register']);
  }

  async onSubmit(f?: NgForm): Promise<void> {
    if (!this.data.username || !this.data.password || this.data.password.length < 8) {
      return;
    }

    this.loading = true;
    try {
      // Simulación login (sustituir por tu backend real)
      await new Promise(res => setTimeout(res, 600));
      localStorage.setItem('logged', '1');
      localStorage.setItem('user_email', this.data.username);
      this.router.navigateByUrl('/catalog', { replaceUrl: true });
    } finally {
      this.loading = false;
    }
  }

  /* 🔽 Login con Google */
  async loginGoogle(): Promise<void> {
    this.loading = true;
    try {
      //const provider = new GoogleAuthProvider();
      //const cred = await signInWithPopup(this.auth, provider);
      localStorage.setItem('logged', '1');
      //localStorage.setItem('user_email', cred.user.email ?? '');
      this.router.navigateByUrl('/catalog', { replaceUrl: true });
    } catch (e) {
      console.error('Google sign-in error', e);
    } finally {
      this.loading = false;
    }
  }

  /* 🔽 Login invitado */
  async loginInvitado(): Promise<void> {
    this.loading = true;
    try {
      //await signInAnonymously(this.auth);
      localStorage.setItem('logged', '1');
      localStorage.setItem('guest', '1');
      this.router.navigateByUrl('/catalog', { replaceUrl: true });
    } catch (e) {
      console.error('Guest sign-in error', e);
    } finally {
      this.loading = false;
    }
  }
}
