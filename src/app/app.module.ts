import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsComponent } from './tickets/tickets.component';
import { Route } from '@angular/compiler/src/core';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { TicketService } from './ticket.service';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    TicketsComponent,
    HeaderComponent,
    Error404Component,
    WelcomeComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent],
})
export class AppModule { }
