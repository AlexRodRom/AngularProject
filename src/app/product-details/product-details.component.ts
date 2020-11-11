import { ProductObject } from './../product-object';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {

  color: string;

  products: Array<object>;
  id: number;
  productSelected: any;

  constructor( private ruta: ActivatedRoute, public productServ: ProductService) { }

  ngOnInit(): void {
    const strBbgId = 'id';
    this.ruta.params.subscribe(params => {
      this.id = params[strBbgId];
      console.log(this.id);
      this.productSelected = this.findProduct();
    });
  }

  filterTickedById(product: ProductObject): any{
    return product._id === this;
  }

  findProduct(): object{
    return this.productServ.products.filter(this.filterTickedById, this.id)[0];
  }
}
