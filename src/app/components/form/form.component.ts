import { ProductService } from './../../services/product/product.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product-class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model: Product;
  constructor(private productServ: ProductService) {
    this.model = new Product();
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.productServ.addProduct(form.value);
    form.reset();
  }

}
