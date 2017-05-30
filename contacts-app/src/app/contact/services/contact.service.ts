import { Injectable } from '@angular/core';
import { DatabaseService } from "./database.service";
import { environment } from "../../../environments/environment";
import { ContactStore } from "./contact-store";
import { Contact } from "../models/contact";

@Injectable()
export class ContactService {
  private contactStore;

  constructor(database: DatabaseService) {
        let localStorage = undefined;
        this.contactStore = environment.databaseUrl ? database : localStorage;
  }

  readContacts() {
    return this.contactStore.readContacts();
  }

  writeContacts(contacts) {
    return this.contactStore.writeContacts(contacts);

  }

  getContacts() {
    return this.contactStore.getContacts();
  }

  addContact(contact: Contact) {
    return this.contactStore.addContact(contact);
  }

  deleteContact(contact: Contact) {
    return this.contactStore.deleteContact(contact);
  }

  removeContact(contact: Contact) {
    return this.contactStore.removeContact(contact);
  }
}
