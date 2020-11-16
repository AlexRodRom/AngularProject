import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { Error404Component } from './components/error404/error404.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent , pathMatch: 'full'},
  // { path: 'product-details', component: ProductDetailsComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'page_not_found', component: Error404Component },
  { path: '**', redirectTo: 'page_not_found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
