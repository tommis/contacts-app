import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from "../contact";
import { MdCardModule } from '@angular/material';

declare module String{
    export var format:any;
}

@Component({
  selector: 'contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;

  @Input() delete: EventEmitter<Contact>;
  @Input() edit: EventEmitter<Contact>;

  @Input() mapsUpdate: EventEmitter<Number>;

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

  mapsImage() : string {
    let address = this.contact.address;
    let mapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${address}&size=400x175`;

    this.mapsUpdate.emit(Date.now());
    return mapsUrl;
  }


}
