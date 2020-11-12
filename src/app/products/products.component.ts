import { IconComponent } from '../icon/icon.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductObject } from '../product-object';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  color: string;
  // editMode: boolean;

  constructor(public productServ: ProductService, private rend: Renderer2) {
    // this.editMode = false;
  }

  ngOnInit(): void {
    this.color = this.colorHEX();
  }

  showProductDetails(product: ProductObject): void{
    // alert(`Trade number ${trade.id} has been booked on ${trade.date}.`)
    // console.log(`Trade number ${product.id} has been booked on ${product.date}.`);
  }

  randomColor(): string{
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHEX(): string{
    return '#' + this.randomColor() + this.randomColor() + this.randomColor();
  }

  showActive(element: HTMLElement): void{
    if (element.classList.contains('alert') && element.classList.contains('alert-secondary')){
      this.rend.removeClass(element, 'alert');
      this.rend.removeClass(element, 'alert-secondary');
    }
    else{
      this.rend.addClass(element, 'alert');
      this.rend.addClass(element, 'alert-secondary');
    }
  }

  addProduct(product: ProductObject): void{
    this.productServ.addProducts(product);
    console.log(this.productServ.products);
  }

  addNewProduct(): void{
    this.productServ.addProduct();
  }

}
