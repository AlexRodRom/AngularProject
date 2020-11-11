import { TicketObject } from './../ticket-object';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})

export class TicketDetailsComponent implements OnInit {

  color: string;

  tickets: Array<object>;
  bbgId: number;
  ticketSelected: any;

  constructor( private ruta: ActivatedRoute, public ticketServ: TicketService) { }

  ngOnInit(): void {
    const strBbgId = 'bbgId';
    this.ruta.params.subscribe(params => {
      this.bbgId = params[strBbgId];
      console.log(this.bbgId);
      this.ticketSelected = this.findTicket();
    });
  }

  filterTickedById(ticket: TicketObject): any{
    return ticket._id === this;
  }

  findTicket(): object{
    return this.ticketServ.tickets.filter(this.filterTickedById, this.bbgId)[0];
  }
}
