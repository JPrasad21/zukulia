import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Product } from '../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsApiService } from '../products-api.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  imports: [MatIconModule, ProductCardComponent, MatSelectModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  productsService = inject(ProductsService);
  productsApiService = inject(ProductsApiService);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory = signal<string>('');
  isLoading = false;
  constructor() {
    effect(() => {
      this.getFilteredProducts();
    });
  }
  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  getCategories() {
    this.productsApiService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
    });
  }
  getProducts() {
    this.isLoading = true;
    this.productsApiService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.getFilteredProducts();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
  getFilteredProducts() {
    const category = this.selectedCategory();
    if (category) {
      this.filteredProducts = this.products.filter((x) => x.category === category);
    } else {
      this.filteredProducts = this.products;
    }
  }
  resetFilter() {
    this.selectedCategory.set('');
  }
}
