import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  contact: Contact;

  constructor() { }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact);

    this.contact = new Contact(0);
  }

  public editContact(contact: Contact) {
    alert("edited" + contact);
  }

  public deleteContact(contact: Contact) {
    delete this.contacts[0];
  }
}
