import { TicketObject } from './../ticket-object';
import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() ticket: TicketObject;

  editTicket: boolean;
  ticketselected: TicketObject;
  constructor(public ticketServ: TicketService) {  }

  ngOnInit(): void {
    this.editTicket = false;
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

  showTicketTools(ticket: TicketObject): void{
    this.ticketselected = ticket;
  }

  hideTicketTools(ticket: TicketObject): void{
    this.ticketselected = null;
  }
}
