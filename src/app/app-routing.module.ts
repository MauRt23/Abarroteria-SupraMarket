import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Punto de entrada dinámico: decide entre login o catálogo
  { path: '', loadComponent: () => import('./start/start.page').then(m => m.StartPage) },

  // ===== AUTH =====
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/auth/register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./features/auth/forgot/forgot.module').then(m => m.ForgotPageModule),
  },

  // ===== APP =====
  { path: 'catalog',  loadComponent: () => import('./features/catalog/list/list.page').then(m => m.ListPage) },
  { path: 'product/:id', loadComponent: () => import('./features/catalog/detail/detail.page').then(m => m.DetailPage) },
  { path: 'cart',     loadComponent: () => import('./features/cart/cart/cart.page').then(m => m.CartPage) },
  { path: 'checkout', loadComponent: () => import('./features/cart/checkout/checkout.page').then(m => m.CheckoutPage) },
  { path: 'orders',   loadComponent: () => import('./features/orders/orders/orders.page').then(m => m.OrdersPage) },
  { path: 'profile',  loadComponent: () => import('./features/profile/profile/profile.page').then(m => m.ProfilePage) },
{ path: 'checkout/card', loadComponent: () => import('./features/cart/checkout/card-form/card-form.page').then(m => m.CardFormPage) },
{ path: 'checkout/paypal', loadComponent: () => import('./features/cart/checkout/paypal/paypal.page').then(m => m.PaypalPage) },


  // Fallback
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
