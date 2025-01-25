import { Routes } from '@angular/router';
import { FavoritesListComponent } from './products/favorites-list/favorites-list.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'favorites',
    component: FavoritesListComponent,
  },
];
