import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact';
import { List } from "linqts";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],


})
export class ContactListComponent implements OnInit {
  @Input() contacts;

  @Output() select: EventEmitter<Contact> = new EventEmitter();

  @Output() editContact: EventEmitter<Contact>;
  @Output() deleteContact: EventEmitter<Contact>;

  @Output() mapsUpdate: EventEmitter<Date>;

  constructor() {
    this.editContact = new EventEmitter();
    this.deleteContact = new EventEmitter();
    this.mapsUpdate = new EventEmitter();
  }

  ngOnInit() { }


  selectContact(contact: Contact) {
    this.select.emit(contact);
  }

}
