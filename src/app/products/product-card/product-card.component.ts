import { Component, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../models/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsApiService } from '../products-api.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  productsService = inject(ProductsService);
  productsApiService = inject(ProductsApiService);
  dialog = inject(MatDialog);
  productSelection() {
    this.productsService.selectedProduct.set(this.product);
    this.openDialog();
  }

  openDialog() {
    this.dialog
      .open(ProductDetailsComponent, { data: this.product })
      .afterClosed()
      .subscribe({
        next: () => {
          this.productsService.selectedProduct.set(undefined);
        },
      });
  }
}
