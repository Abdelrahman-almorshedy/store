import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/i-product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id = '';
  product: IProduct = {} as IProduct;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id;
    });

    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (val) => {
          this.product = val;
        },
        error: (err) => {},
      });
    } else {
      this.router.navigate(['/product']);
    }
  }
}
