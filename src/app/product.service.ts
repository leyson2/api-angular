import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'https://young-sands-07814.herokuapp.com/api/products';
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<IProduct[]>(`${this.apiURL}`);
  }

  getProduct(id: string){
    return this.http.get<IProduct>(`${this.apiURL}/${id}`);
  }
}
