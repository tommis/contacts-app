import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Contact } from './contact/models/contact';
import { MdDialog } from "@angular/material";
import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";
import { List } from "linqts";
import { ContactService } from "./contact/services/contact.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private contacts;

  selectedContact: Contact;

  constructor(private contactService: ContactService, public dialog: MdDialog) {

  }

  ngOnInit() {
    this.reloadContacts();
  }

  private dialogRef;
  contactDialog(editContact?: Contact) {
    this.dialogRef = this.dialog.open(ContactDialogComponent);
    if (editContact && editContact._id)
      this.dialogRef.componentInstance.contact = editContact;

    return this.dialogRef.afterClosed().subscribe(contacts => this.reloadContacts());
  }

  private reloadContacts() {
    this.contactService.getContacts().subscribe(
      val => this.contacts = val,
      err => console.error(err),
      () =>  console.log(this.contacts));
  }

  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact).subscribe(contacts => this.reloadContacts());
    console.log("Deleting contact: " + contact._id);
  }
  onEditContact(contact: Contact) {
    console.log("Editing contact " + contact._id);
    this.contactDialog(contact);
  }
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
