import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  categories = [
    {
      title: 'Category 1',
      subLinks: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    },
    {
      title: 'Category 2',
      subLinks: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    },
    {
      title: 'Category 3',
      subLinks: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    },
    {
      title: 'Category 4',
      subLinks: ['Link 1', 'Link 2', 'Link 3', 'Link 4'],
    },
  ];
}
