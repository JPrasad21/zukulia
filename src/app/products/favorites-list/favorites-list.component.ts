import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites-list',
  imports: [ProductCardComponent, RouterModule, MatButtonModule],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.scss',
})
export class FavoritesListComponent {
  productsService = inject(ProductsService);
  favoriteProducts = computed(() => {
    return this.productsService.favoriteProducts();
  });
}
