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
      title: 'Shopping',
      subLinks: ['Men', 'Women', 'Kids', 'Home & Living'],
    },
    {
      title: 'Customer Policies',
      subLinks: ['About Us', 'Contact Us', 'FAQ', 'Cancellation'],
    },
    {
      title: 'Useful Links',
      subLinks: ['Blog', 'Careers', 'Site Map'],
    },
    {
      title: "What's New",
      subLinks: ['Perfumes', 'Beauty', 'Furnitures', 'Groceries'],
    },
  ];
}
