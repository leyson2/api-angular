import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateProduct, IProduct, IUpdateProduct } from './iproduct';

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

  create(data: ICreateProduct){
    return this.http.post<IProduct>(`${this.apiURL}`, data);
  }

  update(id: string, data: IUpdateProduct){
    return this.http.put<IProduct>(`${this.apiURL}/${id}`, data);
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiURL}/${id}`);
  }
}
