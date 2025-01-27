import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PascalCaseWithSpacePipe } from '../../../shared/pipes/pascal-case-with-space.pipe';
import { ProductsApiService } from '../../products-api.service';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-filter',
  imports: [MatSelectModule, MatFormFieldModule, PascalCaseWithSpacePipe],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  productsService = inject(ProductsService);
  productsApiService = inject(ProductsApiService);
  categories: string[] = [];
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.productsApiService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
    });
  }
}
