import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input<Product>({} as Product);
}
