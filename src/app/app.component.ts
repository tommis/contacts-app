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


  constructor(private contactService: ContactService, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.reloadContacts();
  }

  private dialogRef;
  contactDialog() {
    this.dialogRef = this.dialog.open(ContactDialogComponent);
    this.dialogRef.componentInstance.contact = new Contact();
    return this.dialogRef.afterClosed();
  }

  private reloadContacts() {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  onDeleteContact(contact: Contact) {
    //this.contactService.deleteContact(contact).subscribe(this.contactService.getContacts());
  }
  onEditContact(contact: Contact) {
    this.selectedContact = contact;
    console.log("hello");
  }
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }



}
