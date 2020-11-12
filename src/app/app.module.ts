import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { Route } from '@angular/compiler/src/core';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IconComponent } from './components/icon/icon.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

import { ProductService } from './services/product/product.service';
import { WindowService } from './services/window/window.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsComponent,
    HeaderComponent,
    Error404Component,
    WelcomeComponent,
    IconComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, WindowService],
  bootstrap: [AppComponent],
})
export class AppModule { }
