import { ProductObject } from './../product-object';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product: ProductObject;

  editProduct: boolean;
  productselected: ProductObject;
  constructor(public productServ: ProductService) {  }

  ngOnInit(): void {
    this.editProduct = false;
  }

  deleteProduct(product: ProductObject): void{
    if (confirm('Are you sure to delete ' + product.id + '?')) {
      this.productServ.deleteProduct(product);
    }
  }

  updateProduct(product: ProductObject, newId: any): void{
    const updateProduct: ProductObject = {
      id: Number(newId),
      date: product.date,
      detalle1: 'Det1-' + newId ,
      detalle2: 'Det2-' + newId,
      detalle3: 'Det3-' + newId
    };
    this.productServ.updateProduct(product, updateProduct);
  }

  showProductTools(product: ProductObject): void{
    this.productselected = product;
  }

  hideProductTools(product: ProductObject): void{
    this.productselected = null;
  }
}
