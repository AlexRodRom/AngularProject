import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { Route } from '@angular/compiler/src/core';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { ProductService } from './product.service';
import { IconComponent } from './icon/icon.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsComponent,
    HeaderComponent,
    Error404Component,
    WelcomeComponent,
    IconComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
