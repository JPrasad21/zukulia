import { Injectable, signal } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  selectedProduct = signal<Product | undefined>(undefined);
  favoriteProducts = signal<Product[]>([]);
  selectedCategory = signal<string>('');
  constructor() {
    this.getFavoriteProducts();
  }
  getFavoriteProducts() {
    const favItems = localStorage.getItem('favProducts');
    this.favoriteProducts.set(favItems ? JSON.parse(favItems) : []);
  }
  updateFavoriteProducts() {
    localStorage.setItem('favProducts', JSON.stringify(this.favoriteProducts()));
  }
  addToFavoriteProducts(product: Product) {
    this.favoriteProducts.update((products) => [...products, product]);
    this.updateFavoriteProducts();
  }
  removeFromFavoriteProducts(productId: number) {
    const filteredFavProducts = this.favoriteProducts().filter((x) => x.id !== productId);
    this.favoriteProducts.set(filteredFavProducts);
    this.updateFavoriteProducts();
  }
}
