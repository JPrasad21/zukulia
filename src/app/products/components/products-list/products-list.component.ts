import { Component, effect, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PlaceholderComponent } from '../../../shared/components/placeholder/placeholder.component';
import { Product } from '../../models/product';
import { ProductsApiService } from '../../products-api.service';
import { ProductsService } from '../../products.service';
import { FilterComponent } from '../filter/filter.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, MatButtonModule, PlaceholderComponent, FilterComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  productsService = inject(ProductsService);
  productsApiService = inject(ProductsApiService);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading = false;
  constructor() {
    effect(() => {
      this.getFilteredProducts();
    });
  }
  ngOnInit(): void {
    this.getProducts();
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
    const category = this.productsService.selectedCategory();
    if (category) {
      this.filteredProducts = this.products.filter((x) => x.category === category);
    } else {
      this.filteredProducts = this.products;
    }
  }
  resetFilter() {
    this.productsService.selectedCategory.set('');
  }
}
