import { ProductInterface } from './../../classes/product-class';
import { Product } from '../../classes/product-class';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() cart: boolean;

  changePrice: boolean;
  productselected: Product;
  constructor(public productServ: ProductService) {  }

  ngOnInit(): void {
    this.changePrice = false;
  }

  deleteProduct(product: Product): void{
    if (confirm('Are you sure to delete ' + product.description + '?')) {
      this.productServ.deleteProduct(product);
    }
  }

  updateProductPrice(product: Product, newPrice: number): void{

    const updateProduct: ProductInterface = new Product();
    updateProduct.price = newPrice;

    if (confirm('Are you sure to update the price from ' + product.price  + ' to ' + newPrice + ' ?')) {
      this.productServ.updateProduct(product, updateProduct);
      this.changePrice = false;
    }
  }
}
