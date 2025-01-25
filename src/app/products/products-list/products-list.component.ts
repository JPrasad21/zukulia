import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { ProductsService } from '../products.service';
import { ProductsApiService } from '../products-api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  imports: [HeaderComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  productsService = inject(ProductsService);
  productsApiService = inject(ProductsApiService);
  products: Product[] = [];
  loader = false;
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.loader = true;
    this.productsApiService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.loader = false;
      },
      error: () => {
        this.loader = false;
      }
    });
  }
}
