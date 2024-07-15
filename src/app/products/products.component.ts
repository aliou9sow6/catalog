import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";
import {FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{
  products! : Array<Product>;
  errorMessage! : string;
  searchFormGroup! : FormGroup;

  constructor(private productService : ProductService, private fb : FormBuilder)
  { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword : this.fb.control(null)
    });
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

  handleSearchProduct() {
    let keyword = this.searchFormGroup.value.keyword;

    this.productService.searchProduct(keyword).subscribe(
      (data) => {
        this.products = data;
      }
    )
  }
}
