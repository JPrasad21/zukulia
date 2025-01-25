import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  dialogRef = inject(MatDialogRef);
  product: Product = inject(MAT_DIALOG_DATA);
  productsService = inject(ProductsService);
  selectedImageIndex = 0;
  isFavorite = this.productsService.favoriteProducts.some((x) => x === this.product.id);
  goLeft() {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex -= 1;
    }
  }
  goRight() {
    if (this.selectedImageIndex < this.product.images.length - 1) {
      this.selectedImageIndex += 1;
    }
  }

  handleFavoriteSelection() {
    if (this.isFavorite) {
      this.productsService.removeFromFavoriteProducts(this.product.id);
    } else {
      this.productsService.addToFavoriteProducts(this.product.id);
    }
    this.isFavorite = !this.isFavorite;
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
