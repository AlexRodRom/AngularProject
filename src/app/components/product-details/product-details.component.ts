import { Product } from './../../classes/product-class';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {

  color: string;

  products: Array<object>;
  _id: string;
  id: number;
  productSelected: any;

  constructor( private ruta: ActivatedRoute, public productServ: ProductService) { }

  ngOnInit(): void {
    const strBbgId = '_id';
    this.ruta.params.subscribe(params => {
      this._id = params[strBbgId];
      console.log(this._id);
      this.getProduct(this._id);
      // this.productSelected = this.findProduct();
    });
  }

  // Service API Connection
  getProduct(_id: string): void {

    this.productServ.getProduct(_id).subscribe({
      next: product => { this.productSelected = product; this.productServ.loading = false; },
      error: err => console.log(`Oops... ${err}`),
      complete: () => console.log(`getProducts() Complete!`),
    });

  }


  filterTickedById(product: Product): any{
    return product._id === this;
  }

  findProduct(): object{
    return this.productServ.products.filter(this.filterTickedById, this.id)[0];
  }
}
