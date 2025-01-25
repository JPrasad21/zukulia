import { Component, computed, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites-list',
  imports: [ProductCardComponent],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss',
})
export class FavoritesListComponent {
  productsService = inject(ProductsService);
  favoriteProducts = computed(() => {
    return this.productsService.favoriteProducts();
  });
}
