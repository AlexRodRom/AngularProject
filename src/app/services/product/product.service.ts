import { ProductInterface } from './../../classes/product-class';
import { Product } from '../../classes/product-class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product>;
  cart: Array<Product>;
  httpError: HttpErrorResponse;
  dataURL: string;
  loading: boolean;
  editMode: boolean;

  constructor(private http: HttpClient) {
    this.dataURL = 'assets/data/';
    this.loading = true;
    this.editMode = false;
    this.cart = [];
    this.getProducts();
  }

  getProducts(): void{
    this.http.get<any>('http://localhost:8080/api/products').subscribe(
      data => { this.products = data; this.loading = false; },
      data => { this.httpError = data; }
    );
  }

  deleteProduct(product: Product): void{
    this.http.delete('http://localhost:8080/api/products/' + product._id).subscribe(
      data => {
      const index: number = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
      data => { this.httpError = data; }
    );
  }

  addProducts(product: Product): void{
    this.products.push(product);
  }

  addProduct(newProduct: Product): void{

    newProduct.creationDate = new Date();

    this.http.post('http://localhost:8080/api/products/', newProduct).subscribe(
      data => { // this.products.push(newProduct);
        this.getProducts(); },
      data => { this.httpError = data; }
    );
  }

  updateProduct(product: Product, updateProduct: ProductInterface): void{
    this.http.put('http://localhost:8080/api/products/' + product._id, updateProduct ).subscribe(
      data => { this.getProducts(); },
      data => { this.httpError = data; }
    );
  }

  showProducts(): any{
    if (this.products.length > 0){
      return this.products;
    }
    else{
      return false;
    }
  }

  switchEditMode(): void{
    this.editMode = !(this.editMode);
  }

  addProductToCart(newProduct: Product): void{
    this.cart.push(newProduct);
  }
  removeProductFromCart(newProduct: Product): void{
    const index: number = this.cart.indexOf(newProduct);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}

