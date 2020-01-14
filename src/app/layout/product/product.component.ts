import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data/data.service';
import { ReplaySubject, Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

private products$: ReplaySubject<any[]>;
private subProducts : Subscription;

  constructor(
    private data:DataService
  ) { 
    this.products$ = data.products$;
    this.subProducts = this.products$.subscribe((products) => console.log(products));
    
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subProducts.unsubscribe();
  }
  public create(){
    const data ={
      nome:"super",
      initprice: 10,
      discount: 23,
      iva: 23,
    }
    const product = new Product(data);
    this.data.createProduct(product);
  }

  public update(){
    const data ={
      id:1,
      nome:"bom",
      initprice: 20,
      discount: 10,
      iva: 23,
    }
    const product = new Product(data);
    this.data.createProduct(product);
  }

  public delete(){
    let id= 2;
    this.data.delete(id)
  }
}
