import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products !: Array<Product>;

  constructor() {
    this.products = [
      { id : 1, name : "computer", price : 400 },
      { id : 2, name : "phone", price : 200 },
      { id : 3, name : "charger", price : 30 },
      { id : 4, name : "book", price : 10 }
    ]
  }
  public getAllProducts():Observable<Array<Product>>{
    let rnd = Math.random();
    if (rnd > 0.5)
      return throwError(()=> new Error("internal server error"));
    else
      return of(this.products);
  }

  public deleteProduct(id : number):Observable<boolean>{
    this.products = this.products.filter(p => p.id! = id);
    return of(true);
  }
}
