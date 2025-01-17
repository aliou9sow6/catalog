import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products !: Array<Product>;

  constructor() {
    // this.products = [
    //   { id : 1, name : "computer", price : 400, promotion : false },
    //   { id : 2, name : "phone", price : 200, promotion: true },
    //   { id : 3, name : "charger", price : 30, promotion: false },
    //   { id : 4, name : "book", price : 10, promotion: true }
    // ]
    this.products;
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

  private products : Product[] = [
    {
        "id": 1,
        "name": "Product_1",
        "price": 48.27,
        "promotion": true
    },
    {
        "id": 2,
        "name": "Product_2",
        "price": 30.81,
        "promotion": false
    },
    {
        "id": 3,
        "name": "Product_3",
        "price": 88.39,
        "promotion": false
    },
    {
        "id": 4,
        "name": "Product_4",
        "price": 73.78,
        "promotion": false
    },
    {
        "id": 5,
        "name": "Product_5",
        "price": 86.36,
        "promotion": true
    },
    {
        "id": 6,
        "name": "Product_6",
        "price": 11.17,
        "promotion": false
    },
    {
        "id": 7,
        "name": "Product_7",
        "price": 57.2,
        "promotion": false
    },
    {
        "id": 8,
        "name": "Product_8",
        "price": 25.6,
        "promotion": true
    },
    {
        "id": 9,
        "name": "Product_9",
        "price": 77.84,
        "promotion": true
    },
    {
        "id": 10,
        "name": "Product_10",
        "price": 96.85,
        "promotion": false
    },
    {
        "id": 11,
        "name": "Product_11",
        "price": 37.68,
        "promotion": false
    },
    {
        "id": 12,
        "name": "Product_12",
        "price": 62.04,
        "promotion": true
    },
    {
        "id": 13,
        "name": "Product_13",
        "price": 68.82,
        "promotion": false
    },
    {
        "id": 14,
        "name": "Product_14",
        "price": 80.15,
        "promotion": true
    },
    {
        "id": 15,
        "name": "Product_15",
        "price": 20.29,
        "promotion": false
    },
    {
        "id": 16,
        "name": "Product_16",
        "price": 23.05,
        "promotion": false
    },
    {
        "id": 17,
        "name": "Product_17",
        "price": 72.95,
        "promotion": false
    },
    {
        "id": 18,
        "name": "Product_18",
        "price": 17.24,
        "promotion": false
    },
    {
        "id": 19,
        "name": "Product_19",
        "price": 99.2,
        "promotion": false
    },
    {
        "id": 20,
        "name": "Product_20",
        "price": 78.24,
        "promotion": true
    }
]
}
