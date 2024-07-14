import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";
import {askConfirmation} from "@angular/cli/src/utilities/prompt";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products! : Array<Product>;
  errorMessage! : string;
  constructor(private productService : ProductService)
  { }

  ngOnInit(): void {
    this.handleGetAllProduct();
  }

  public handleGetAllProduct(){
    this.productService.getAllProducts().subscribe({
      next : (data) => {
        this.products = data;
      },
      error : err =>{
        this.errorMessage = err;
      }
    });
  }

  handleDelProduct(p: Product) {
    let conf = confirm("Etes-vous sur de vouloir supprimer ce produit");
    if (!conf) return;
    this.productService.deleteProduct(p.id).subscribe({
      next : value => {
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      }
    })
  }

  handleSetPromotion(p : Product) {
    let promo = p.promotion;
    this.productService.setPromotion(p.id).subscribe(
      next  => {
        p.promotion = !promo;
      },
      err =>{
        this.errorMessage = err;
      }
    )
  }

}
