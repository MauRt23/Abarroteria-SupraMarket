export interface Product {
  id: string;
  name: string;
  price: number;
  unit: 'pz'|'kg'|'lt';
  stock?: number;
  image?: string;
  category?: string;
   description?: string;
}