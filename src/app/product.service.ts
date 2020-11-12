import { ProductObject } from './product-object';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<ProductObject>;
  httpError: HttpErrorResponse;
  dataURL: string;
  loading: boolean;
  editMode: boolean;

  constructor(private http: HttpClient) {
    this.dataURL = 'assets/data/';
    this.loading = true;
    this.editMode = false;
    this.getProducts();
    /*this.products = [];
    for (let index = 8000; index < 8054; index++) {
      let id = index+1;
      this.products.push({id:id,date: new Date(),detalle1:'detalle1-('+id+')',detalle2:'detalle2-('+id+')',detalle3:'detalle3-('+id+')'});
    }*/
  }

  getProducts(): void{
    // this.http.get<any>(this.dataURL + 'products.json').subscribe(
    this.http.get<any>('http://localhost:8080/api/products').subscribe(
      data => { this.products = data; this.loading = false; },
      data => { this.httpError = data; }
    );
  }

  deleteProduct(product: ProductObject): void{
    // this.http.get<any>(this.dataURL + 'products.json').subscribe(
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

  addProducts(product: ProductObject): void{
    this.products.push(product);
  }

  addProduct(): void{
    const dateNow = new Date();
    const newProduct: ProductObject = {id: '8000', creationDate: dateNow , description: 'Description', price: 5.50, urlImage: 'https://img.tesco.com/Groceries/pi/727/5057753925727/IDShot_225x225.jpg' };

    this.http.post('http://localhost:8080/api/products/', newProduct).subscribe(
      data => { // this.products.push(newProduct);
        this.getProducts(); },
      data => { this.httpError = data; }
    );
  }

  updateProduct(Product: ProductObject, updateProduct: ProductObject): void{
    this.http.put('http://localhost:8080/api/products/' + Product._id, updateProduct ).subscribe(
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
}
