import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/i-product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getLimitProducts().subscribe({
      next: (val) => {
        this.products = val;
      },
      error: (err) => {},
    });
  }
}
