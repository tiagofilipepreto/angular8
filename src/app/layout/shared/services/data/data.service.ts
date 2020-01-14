import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products : any[];
  public products$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private productAPI: ProductService
  ) {
    this.getProducts();
   }

  public getProducts (){
    this.productAPI.getAll().subscribe(
    (res:any)=>{
      this.products = res;
      this.products$.next(res);
    }
    );
  }

  public createProduct(product:Product){
    this.productAPI.create(product).subscribe();
  }

  public delete (id:number){
    this.productAPI.delete(id);
  }
  public updateProduct(product:Product){
    this.productAPI.update(product);
  }
}
