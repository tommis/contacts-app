import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { MdCardModule } from '@angular/material';


@Component({
  selector: 'contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;

  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

  constructor() { }

  ngOnInit() {
    console.log(this.contact);
  }

  editContact() {
    this.edit.emit(this.contact);
  }

  removeContact() {
    this.remove.emit(this.contact);
  }

  showContactOnMap() {
    this.showOnMap.emit(this.contact);
  }
}
