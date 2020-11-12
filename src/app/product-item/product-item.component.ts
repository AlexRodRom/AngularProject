import { ProductObject } from '../product-object';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: ProductObject;
  // @Input() editMode: boolean;

  changePrice: boolean;
  productselected: ProductObject;
  constructor(public productServ: ProductService) {  }

  ngOnInit(): void {
    // this.editMode = false;
    this.changePrice = false;
  }

  deleteProduct(product: ProductObject): void{
    if (confirm('Are you sure to delete ' + product.description + '?')) {
      this.productServ.deleteProduct(product);
    }
  }

  updateProduct(product: ProductObject, newPrice: number): void{
    const updateProduct: ProductObject = {
      id: product.id,
      creationDate: product.creationDate,
      description: product.description,
      price: newPrice,
      urlImage: product.urlImage
    };
    this.productServ.updateProduct(product, updateProduct);
    this.changePrice = false;
  }

  showProductTools(product: ProductObject): void{
    // this.productselected = product;
    // this.productServ.editMode = true;
  }

  hideProductTools(product: ProductObject): void{
    // this.productselected = null;
    // this.productServ.editMode = false;
  }
}
