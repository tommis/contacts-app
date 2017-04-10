import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { ContactService } from "../services/contact.service";
import { Contact } from "../contact";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {
  contact: Contact;

  addContact;

  constructor(public dialogRef: MdDialogRef<ContactDialogComponent>, contactService: ContactService) {

    this.addContact = contactService.addContact;
  }

}
