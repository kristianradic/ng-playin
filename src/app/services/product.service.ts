import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product';

@Injectable()
export class ProductService {
  private productsUrl = 'app/products'; // URL to web api

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http
      .get<Product[]>(this.productsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  saveProduct(product: Product) {
    if (product.id) {
      console.log('1');
      return this.put(product);
    }
    console.log('2');
    return this.post(product);
  }

    private post(product: Product) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Product>(this.productsUrl, product)
      .pipe(catchError(this.handleError));
  }

  // Update existing Product
  private put(product: Product) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.productsUrl}/${product.id}`;
    console.log('url', url)
    

    return this.http.put<Product>(url, product).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
