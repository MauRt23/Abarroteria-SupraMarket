import { Injectable } from '@angular/core';
import { Product } from '../models/product';

type CartRow = { product: Product; qty: number };
const STORAGE_KEY = 'cart_v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: CartRow[] = [];

  constructor() {
    this.load();
  }

  /** Agrega 1 (o la cantidad indicada) del producto */
  add(product: Product, qty = 1): void {
    const amount = Math.max(1, Number(qty) || 1);
    const row = this.items.find(i => i.product.id === product.id);
    if (row) row.qty += amount;
    else this.items.push({ product, qty: amount });
    this.bump();
  }

  /** +1 a la fila */
  inc(id: string): void {
    const row = this.items.find(i => i.product.id === id);
    if (!row) return;
    row.qty++;
    this.bump();
  }

  /** −1 a la fila (si llega a 0, elimina) */
  dec(id: string): void {
    const row = this.items.find(i => i.product.id === id);
    if (!row) return;
    row.qty = Math.max(0, row.qty - 1);
    if (row.qty === 0) this.remove(id);
    else this.bump();
  }

  /** Elimina la fila del carrito */
  remove(id: string): void {
    this.items = this.items.filter(i => i.product.id !== id);
    this.bump();
  }

  /** Total del carrito, redondeado a 2 decimales */
  total(): number {
    const sum = this.items.reduce(
      (a, i) => a + Number(i.product?.price ?? 0) * Number(i.qty ?? 0),
      0
    );
    return Number(sum.toFixed(2));
  }

  /** Cantidad total de piezas (para badges) */
  count(): number {
    return this.items.reduce((a, i) => a + Number(i.qty ?? 0), 0);
  }

  /** Vacía el carrito */
  clear(): void {
    this.items = [];
    this.bump();
  }

  // ---------- Helpers ----------
  private bump(): void {
    // Clona para forzar change detection y persiste
    this.items = [...this.items];
    this.save();
  }

  private save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    } catch {}
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Array<any>;
      // Sanitiza
      this.items = (parsed || []).map(r => ({
        product: r.product,
        qty: Math.max(1, Number(r.qty) || 1),
      }));
    } catch {
      this.items = [];
    }
  }
}
