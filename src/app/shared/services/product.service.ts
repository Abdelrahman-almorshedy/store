import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/i-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = environment.baseUrl; //
  limit = 10;
  constructor(private http: HttpClient) {}

  getLimitProducts() {
    const params = new HttpParams().append('limit', this.limit);
    return this.http.get<IProduct[]>(this.baseUrl, { params });
  }
  getProductById(id: string) {
    console.log(id);
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }
  addProduct(product: IProduct) {
    return this.http.post(this.baseUrl, product);
  }
}
