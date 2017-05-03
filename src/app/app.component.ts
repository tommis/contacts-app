import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Contact } from './contact/contact';
import { ContactService } from "./contact/services/contact.service";
import { MdDialog } from "@angular/material";
import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private contacts: Contact[];

  selectedContact: Contact;

  mapsLastUpdated: Date;

  constructor(private contactService: ContactService, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.reloadContacts();
  }

  private dialogRef;
  contactDialog(editContact?: Contact) {
    this.dialogRef = this.dialog.open(ContactDialogComponent);
    if (editContact.id  === null)
      this.dialogRef.componentInstance.contact = new Contact();
    else
      this.dialogRef.componentInstance.contact = editContact;

    return this.dialogRef.afterClosed();
  }

  private reloadContacts() {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    console.log("hello");
  }
  onEditContact(contact: Contact) {
    console.log("Editing contact " + contact.id);
    this.contactDialog(contact);
    this.contactService.editContact(contact);
  }
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  mapUpdate(time: Date) {
    this.mapsLastUpdated = time;
  }



}
