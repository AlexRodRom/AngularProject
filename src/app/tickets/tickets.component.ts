import { IconComponent } from './../icon/icon.component';
import { TicketObject } from './../ticket-object';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  color: string;
  // tickets:Array<Object>;
  showTools: boolean;
  ticketselected: TicketObject;
  editTicket: TicketObject;
  constructor(public ticketServ: TicketService, private rend: Renderer2) {
    this.editTicket = null;
  }

  ngOnInit(): void {
    this.color = this.colorHEX();
  }

  showTicketDetails(ticket: TicketObject): void{
    // alert(`Trade number ${trade.id} has been booked on ${trade.date}.`)
    // console.log(`Trade number ${ticket.id} has been booked on ${ticket.date}.`);
  }

  showTicketTools(ticket: TicketObject): void{
    this.ticketselected = ticket;
  }

  hideTicketTools(ticket: TicketObject): void{
    this.ticketselected = null;
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

  addTicket(ticket: TicketObject): void{
    this.ticketServ.addTickets(ticket);
    console.log(this.ticketServ.tickets);
  }

  addNewTicket(): void{
    this.ticketServ.addTicket();
  }

  deleteTicket(ticket: TicketObject): void{
    if (confirm('Are you sure to delete ' + ticket.bbgId + '?')) {
      this.ticketServ.deleteTicket(ticket);
    }
  }

  updateTicket(ticket: TicketObject, newId: any): void{
    const updateTicket: TicketObject = {
      bbgId: Number(newId),
      date: ticket.date,
      detalle1: 'Det1-' + newId ,
      detalle2: 'Det2-' + newId,
      detalle3: 'Det3-' + newId
    };
    this.ticketServ.updateTicket(ticket, updateTicket);
  }
}
