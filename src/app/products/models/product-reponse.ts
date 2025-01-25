import { Product } from './product';

export interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
