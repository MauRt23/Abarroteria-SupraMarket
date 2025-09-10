import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  // Usa IDs estables (slugs) y nombres/EXT exactos de tus archivos
  private products: Product[] = [
    {
      id: 'arroz-1kg',
      name: 'Arroz 1 kg',
      price: 28,
      unit: 'pz',
      stock: 120,
      image: 'assets/products/arroz.jpg',
      category: 'Granos',
      description: 'Arroz blanco de grano largo, bolsa de 1 kg. Ideal para comidas diarias.'
    },
    {
      id: 'frijol-900g',
      name: 'Frijol 900 g',
      price: 35,
      unit: 'pz',
      stock: 95,
      image: 'assets/products/frijol.jpg',
      category: 'Granos',
      description: 'Frijol negro seleccionado, cocción uniforme. Presentación de 900 g.'
    },
    {
      id: 'aceite-1l',
      name: 'Aceite 1 lt',
      price: 55,
      unit: 'pz',
      stock: 60,
      image: 'assets/products/aceite.jpeg', // <- tu archivo es .jpeg
      category: 'Despensa',
      description: 'Aceite vegetal 100% puro. Botella de 1 litro.'
    },
    {
      id: 'azucar-1kg',
      name: 'Azúcar 1 kg',
      price: 30,
      unit: 'pz',
      stock: 110,
      image: 'assets/products/azucar.jpg',
      category: 'Despensa',
      description: 'Azúcar estándar refinada, paquete de 1 kg.'
    },
    {
      id: 'sal-1kg',
      name: 'Sal 1 kg',
      price: 12,
      unit: 'pz',
      stock: 140,
      image: 'assets/products/sal.jpg',
      category: 'Despensa',
      description: 'Sal yodada fina para cocina, paquete de 1 kg.'
    },
    {
      id: 'leche-1l',
      name: 'Leche 1 lt',
      price: 25,
      unit: 'pz',
      stock: 80,
      image: 'assets/products/leche.jpg',
      category: 'Lácteos',
      description: 'Leche entera ultrapasteurizada, envase de 1 litro.'
    },
    {
      id: 'atun-140g',
      name: 'Atún 140 g',
      price: 22,
      unit: 'pz',
      stock: 70,
      image: 'assets/products/atun.jpg',
      category: 'Enlatados',
      description: 'Atún en agua, lata de 140 g. Alto en proteína.'
    },
    {
      id: 'galletas-170g',
      name: 'Galletas 170 g',
      price: 18,
      unit: 'pz',
      stock: 90,
      image: 'assets/products/marias.jpg', // <- usas tu imagen de "marias.jpg"
      category: 'Snacks',
      description: 'Galletas clásicas crujientes, paquete de 170 g.'
    },
    {
      id: 'harina-1kg',
      name: 'Harina 1 kg',
      price: 20,
      unit: 'pz',
      stock: 85,
      image: 'assets/products/harina.jpg',
      category: 'Despensa',
      description: 'Harina de trigo para pan y repostería, bolsa de 1 kg.'
    },
    {
      id: 'salsa-340g',
      name: 'Salsa 340 g',
      price: 24,
      unit: 'pz',
      stock: 73,
      image: 'assets/products/salsa.jpg',
      category: 'Despensa',
      description: 'Salsa roja casera, frasco de 340 g. Sabor medio picante.'
    },
    {
      id: 'refresco-2l',
      name: 'Refresco 2 lt',
      price: 19,
      unit: 'pz',
      stock: 50,
      image: 'assets/products/refresco.jpg',
      category: 'Bebidas',
      description: 'Bebida gaseosa sabor cola, botella de 2 litros.'
    },
    {
      id: 'cafe-250g',
      name: 'Café 250 g',
      price: 65,
      unit: 'pz',
      stock: 40,
      image: 'assets/products/cafe.jpg',
      category: 'Bebidas',
      description: 'Café molido mezcla arábica, paquete de 250 g.'
    },
  ];

  // alias por compatibilidad (usa el que te convenga)
  list()           { return this.products; }
  getProducts()    { return this.products; }
  getProduct(id: string) { return this.products.find(p => p.id === id)!; }
}
