import { Observable } from 'rxjs';
import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { HttpErrorResponse } from '@angular/common/http';
import { fromEvent } from 'rxjs';

import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../classes/product-class';
import { ProductService } from '../../services/product/product.service';
import { WindowService } from '../../services/window/window.service';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  animations: [
    trigger('productListAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(1000, [
            animate('2s ease-out', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(1000, [
            animate('2s ease-in', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('cartListAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(200, [
            animate('0.5s ease-out', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(200, [
            animate('1s ease-in', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products: Array<Product> = [];
  model: Product;
  editMode: boolean;
  constructor(public productServ: ProductService, private rend: Renderer2, public windowServ: WindowService) {
    this.model = new Product();
  }

  ngOnInit(): void {

    this.productServ.getProducts();

  }

  // // Service API Connection
  // getProducts(): void {
  //   this.productServ.getProducts().subscribe({
  //     next: products => { this.products = products; this.productServ.loading = false; },
  //     error: err => console.log(`Oops... ${err}`),
  //     complete: () => console.log(`getProducts() Complete!`),
  //   });
  // }

  showProductDetails(product: Product): void{
    // alert(`Trade number ${trade.id} has been booked on ${trade.date}.`)
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

  addProduct(product: Product): void{
    this.productServ.addProducts(product);
    console.log(this.productServ.products);
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.productServ.addProduct(form.value);
  }
}
