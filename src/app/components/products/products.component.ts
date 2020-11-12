import { WindowService } from '../../services/window/window.service';
import { IconComponent } from '../icon/icon.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductObject } from '../../interfaces/product-object';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public productServ: ProductService, private rend: Renderer2, public windowServ: WindowService) { }

  ngOnInit(): void {
  }

  showProductDetails(product: ProductObject): void{
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
