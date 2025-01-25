import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services/http.service';
import { Product } from './models/product';
import { ProductResponse } from './models/product-reponse';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  httpService = inject(HttpService);
  urls = {
    products: 'products',
  };

  getProducts(): Observable<ProductResponse> {
    return this.httpService.get<ProductResponse>(this.urls.products);
  }

  getProductById(id: string): Observable<Product> {
    return this.httpService.get<Product>(this.urls.products + '/' + id);
  }
}
