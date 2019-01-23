import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../services/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: Product;
  @Output() onFavorite = new EventEmitter<Product>();
  constructor(
    private router: Router,
    private productService: ProductService) {
  }

  updateProduct(product: Product) {
    this.productService.saveProduct(product);
  }

  favorite() {
    this.product.favorite = !this.product.favorite;
    this.onFavorite.emit(this.product);
  }

  gotoDetail(product: Product): void {
    const link = ['/product-detail', product.id];
    this.router.navigate(link);
  }
}