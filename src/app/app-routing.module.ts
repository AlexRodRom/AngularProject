import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsComponent } from './tickets/tickets.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent , pathMatch: 'full'},
  { path: 'ticket-details', component: TicketDetailsComponent },
  { path: 'ticket-details/:bbgId', component: TicketDetailsComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'page_not_found', component: Error404Component },
  { path: '**', redirectTo: 'page_not_found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
