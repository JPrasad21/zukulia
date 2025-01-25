import { Injectable, signal } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  selectedProduct = signal<Product | undefined>(undefined);
  favoriteProducts: number[] = [];
  constructor() {
    this.getFavoriteProducts();
  }
  getFavoriteProducts() {
    const favItems = localStorage.getItem('favProducts');
    this.favoriteProducts = favItems ? JSON.parse(favItems) : [];
  }
  updateFavoriteProducts() {
    localStorage.setItem('favProducts', JSON.stringify(this.favoriteProducts));
  }
  addToFavoriteProducts(productId: number) {
    this.favoriteProducts.push(productId);
    this.updateFavoriteProducts();
  }
  removeFromFavoriteProducts(productId: number) {
    const productIndex = this.favoriteProducts.findIndex((x) => x === productId);
    if (productIndex >= 0) {
      this.favoriteProducts.splice(productIndex, 1);
    }
    this.updateFavoriteProducts();
  }
}
