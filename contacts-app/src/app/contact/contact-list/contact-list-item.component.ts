import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from "../models/contact";
import { MdCardModule } from '@angular/material';
import { trigger, state, transition, style, animate, group } from "@angular/animations";

@Component({
  selector: 'contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
    transition('* => void', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
  ]
})
export class ContactListItemComponent {
  @Input() contact: Contact;

  @Input() delete: EventEmitter<Contact>;
  @Input() edit: EventEmitter<Contact>;

  @Input() mapsUpdate: EventEmitter<Number>;

  constructor() { }

  deleteContact() {
    this.delete.emit(this.contact);
  }
  editContact() {
    this.edit.emit(this.contact);
  }

}
