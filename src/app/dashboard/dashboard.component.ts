import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../services/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  searchText: string = '';
  products: Product[] = [];
  favoriteProducts: Product[] = [];
  constructor(
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
        this.favoriteProducts = this.products.filter(product => product.favorite === true);
      });
  }

  onFavorite(product: Product) {
    let index = this.products.findIndex(x => x.id == product.id);
    this.products[index] = product;
    this.favoriteProducts = this.products.filter(product => product.favorite === true);
    console.log('called', product);
  }

  onSearch(val: string) {
    this.products
  }

  gotoDetail(product: Product): void {
    const link = ['/product-detail', product.id];
    this.router.navigate(link);
  }
}