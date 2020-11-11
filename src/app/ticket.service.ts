import { TicketObject } from './ticket-object';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Array<TicketObject>;
  httpError: HttpErrorResponse;
  dataURL: string;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.dataURL = 'assets/data/';
    this.loading = true;
    this.getTickets();
    /*this.tickets = [];
    for (let index = 8000; index < 8054; index++) {
      let id = index+1;
      this.tickets.push({id:id,date: new Date(),detalle1:'detalle1-('+id+')',detalle2:'detalle2-('+id+')',detalle3:'detalle3-('+id+')'});
    }*/
  }

  getTickets(): void{
    // this.http.get<any>(this.dataURL + 'tickets.json').subscribe(
    this.http.get<any>('http://localhost:8080/api/tickets').subscribe(
      data => { this.tickets = data; this.loading = false; },
      data => { this.httpError = data; }
    );
  }

  deleteTicket(ticket: TicketObject): void{
    // this.http.get<any>(this.dataURL + 'tickets.json').subscribe(
    this.http.delete('http://localhost:8080/api/tickets/' + ticket._id).subscribe(
      data => {
      const index: number = this.tickets.indexOf(ticket);
      if (index !== -1) {
        this.tickets.splice(index, 1);
      }
    },
      data => { this.httpError = data; }
    );
  }

  addTickets(ticket: TicketObject): void{
    this.tickets.push(ticket);
  }

  addTicket(): void{
    const dateNow = new Date();
    const newTicket: TicketObject = {bbgId: 8000, date: dateNow , detalle1: 'Detalle-1', detalle2: 'Detalle-2', detalle3: 'Detalle-3' };

    this.http.post('http://localhost:8080/api/tickets/', newTicket).subscribe(
      data => { // this.tickets.push(newTicket);
        this.getTickets(); },
      data => { this.httpError = data; }
    );
  }

  updateTicket(Ticket: TicketObject, updateTicket: TicketObject): void{
    this.http.put('http://localhost:8080/api/tickets/' + Ticket._id, updateTicket ).subscribe(
      data => { this.getTickets(); },
      data => { this.httpError = data; }
    );
  }

  showTickets(): any{
    if (this.tickets.length > 0){
      return this.tickets;
    }
    else{
      return false;
    }
  }
}
