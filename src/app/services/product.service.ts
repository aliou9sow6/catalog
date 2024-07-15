import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product>;

  constructor() {
    this.products = [
      { id : 1, name : "computer", price : 400, promotion : false },
      { id : 2, name : "phone", price : 200, promotion: true },
      { id : 3, name : "charger", price : 30, promotion: false },
      { id : 4, name : "book", price : 10, promotion: true }
    ]
  }
  public getAllProducts():Observable<Array<Product>>{
    /*let rnd = Math.random();
    if (rnd > 0.5)
      return throwError(()=> new Error("internal server error"));
    else*/
      return of(this.products);
  }

  public deleteProduct(id : number):Observable<boolean>{
    this.products = this.products.filter(p => p.id! = id);
    return of(true);
  }

  public setPromotion(id : number): Observable<boolean>{
    let product = this.products.find(p => p.id ==id);
    if (product != undefined){
      product.promotion = !product.promotion;
      return of(true);
    }else
      return throwError(()=>new Error("Product not found"));
  }

  public searchProduct(keyword : string): Observable<Product[]>{
    let products = this.products.filter(p => p.name.includes(keyword));
    return of(products);
  }


}
