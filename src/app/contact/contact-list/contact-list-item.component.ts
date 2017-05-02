import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from "../contact";
import { MdCardModule } from '@angular/material';


@Component({
  selector: 'contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;

  @Input() delete: EventEmitter<Contact> = new EventEmitter();
  @Input() edit: EventEmitter<Contact> = new EventEmitter();
  //@Input() showOnMap: EventEmitter<Contact>;

  constructor() { }

  ngOnInit() {
    console.log(this.contact);
  }

  deleteContact() {
    this.delete.emit(this.contact);
  }
  editContact() {
    this.edit.emit(this.contact);
  }



/*  showContactOnMap() {
    this.showOnMap.emit(this.contact);
  }*/
}
