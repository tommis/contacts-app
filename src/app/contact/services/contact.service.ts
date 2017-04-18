import { Injectable, Input } from '@angular/core';
import { Contact } from '../contact';

@Injectable()
export class ContactService {
 // contacts;


  constructor() {
  //  this.contacts = [new Contact(0, "tommi", "saira", 21, "lpr"), new Contact(1, "valtteri", "virtanen", 0, ""), new Contact(0, "", "", 0, "")];

    let c = localStorage.getItem("contacts");

    if(c.length)
  }

  getContacts () {
    console.log("hei");

    let contacts = localStorage.getItem("contacts");

    return contacts;
  }

  addContact(contact: Contact) {
    console.log(contact);
    let contacts = JSON.parse(this.getContacts());

  }

  public editContact(contact: Contact) {
    alert("edited" + contact);
  }

  public deleteContact(contact: Contact) {
   // delete this.contacts[0];
  }
}
