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
  private contacts: Contact[];

  selectedContact: Contact;


  constructor(private contactService: ContactService, public dialog: MdDialog) {
    this.contacts = contactService.getContacts();
  }

  private dialogRef;
  contactDialog() {
    this.dialogRef = this.dialog.open(ContactDialogComponent);
    this.dialogRef.componentInstance.contact = new Contact(0, "", "", 0, "");
    return this.dialogRef.afterClosed();
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

}
