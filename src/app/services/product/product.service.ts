import { ProductInterface } from './../../classes/product-class';
import { Product } from '../../classes/product-class';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/products';
    this.dataURL = 'assets/data/';
    this.loading = true;
    this.editMode = false;
    this.cart = [];
    // this.getProducts();
  }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.url);

    // this.http.get<Product[]>('http://localhost:8080/api/products').subscribe(
    //   data => { this.products = data; this.loading = false; },
    //   data => { this.httpError = data; }
    // );
  }

  getProduct(_id: string): Observable<Product> {
    return this.http.get<Product>(this.url + '/' + _id);
  }

  deleteProduct(product: Product): void{
    this.http.delete(this.url + '/' + product._id).subscribe(
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

    this.http.post(this.url, newProduct).subscribe(
      data => { // this.products.push(newProduct);
        this.getProducts(); },
      data => { this.httpError = data; }
    );
  }

  updateProduct(product: Product, updateProduct: ProductInterface): void{
    this.http.put(this.url + '/' + product._id, updateProduct ).subscribe(
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

