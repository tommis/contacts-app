import { Injectable } from '@angular/core';

import { Contact } from '../contact';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  formUser = {
    firstname: "",
    lastname: "",
    age: 0,
    address: ""
  }

  constructor() { }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact() {
    this.contacts.push(
      new Contact(0,
        this.formUser.firstname,
        this.formUser.lastname,
        this.formUser.age,
        this.formUser.address
      )
    );

  }

  public editContact(contact: Contact) {
    alert("edited");
  }

  public deleteContact(contact: Contact) {
    alert("deleted");
  }
}
