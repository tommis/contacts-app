import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from './contact/contact';
import { ContactService } from "./contact/services/contact.service";
import { MdDialog } from "@angular/material";
import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private contacts;

  selectedContact: Contact;

  deleteContact;

  constructor(contactService: ContactService, public dialog: MdDialog) {
    this.contacts = contactService.getContacts();

    this.deleteContact = contactService.deleteContact;

  }

  private dialogRef;
  contactDialog() {
    this.dialogRef = this.dialog.open(ContactDialogComponent);
    this.dialogRef.componentInstance.contact = new Contact(0, "", "", 0, "");
    return this.dialogRef.afterClosed();
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

}
