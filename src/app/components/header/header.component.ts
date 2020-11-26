import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.scss', './header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public productServ: ProductService) { }
  ngOnInit(): void {
  }
}
