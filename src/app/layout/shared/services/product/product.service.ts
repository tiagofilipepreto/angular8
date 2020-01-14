import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/stockmysql/products/';
  constructor(
    private http: HttpClient
  ) { }

  public getAll(){
    return this.http.get(this.url);
  }
  public getById(id: number){
    return this.http.get(this.url+id);
  }
  public create(product: Product){
    return this.http.post(this.url, product);
  }
  public delete(id: number){
    return this.http.delete(this.url+ id);
  }
  public update (product: Product){
    return this.http.put(this.url,product);
  }
}
