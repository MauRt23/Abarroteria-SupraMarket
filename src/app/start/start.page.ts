import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  template: ``,
})
export class StartPage {
  constructor(private router: Router) {
    const logged = !!localStorage.getItem('logged'); // simulación de sesión iniciada
    this.router.navigateByUrl(logged ? '/catalog' : '/login', { replaceUrl: true });
  }
}
