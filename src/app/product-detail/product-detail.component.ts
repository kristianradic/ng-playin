import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../services/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss', '../product/product.component.scss' ]
})

export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.productService.getProduct(id).subscribe(product => (this.product = product));
      }
    });
  }
  goHomepage(): void {
    this.router.navigate(['/dashboard']);
  }
}
