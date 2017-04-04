import { Component } from '@angular/core';
import { Contact } from './contact/contact';
import { ContactService } from "./contact/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  selectedContact: Contact;

  addContact;
  editContact;
  deleteContact;

  constructor(contactService: ContactService) {
    this.contacts = contactService.getContacts();

    this.addContact = contactService.addContact;
    this.editContact = contactService.editContact;
    this.deleteContact = contactService.deleteContact;
  }


  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
