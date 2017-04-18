import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { ContactService } from "../services/contact.service";
import { Contact } from "../contact";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {
  @Input() contact: Contact;


  constructor(public dialogRef: MdDialogRef<ContactDialogComponent>, private contactService: ContactService) {

  }

  addNewContact(contact: Contact){
    this.contactService.addContact(contact);
  }
}
