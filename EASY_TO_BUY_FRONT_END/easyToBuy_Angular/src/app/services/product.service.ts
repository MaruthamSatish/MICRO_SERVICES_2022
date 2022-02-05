import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productAPIURl = "http://localhost:9094";
  constructor(private httpClient: HttpClient) { }
  getProductsByCategoryId(categoryId): Observable<any> {
    return this.httpClient.get(`${this.productAPIURl}/api/products/category/${categoryId}`);
  }
  getProductById(productId): Observable<any> {
    return this.httpClient.get(`${this.productAPIURl}/api/products/${productId}`);
  }
  getProductsByCategoryId1(categoryId): Observable<any> {
    return this.httpClient.get(`${this.productAPIURl}/api/products/category/${categoryId}`);
  }
}
