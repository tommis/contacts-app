///<reference path="../contact.ts"/>
import { Injectable, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { MdSnackBar } from "@angular/material";
import { Observable } from "rxjs";
import * as _ from 'lodash';
import { ContactStore } from "./contact-store";

@Injectable()
export class ContactService implements ContactStore {
 // contacts;

  private cKey= "contacts";

  constructor(public snackBar: MdSnackBar) {
    let c = localStorage.getItem(this.cKey);
    if (c.length < 15 && this.isJSON(c))
      localStorage.setItem(this.cKey, JSON.stringify({"contacts": []}));

  }

  isJSON(str) : boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  readContacts() {
    let contacts = JSON.parse(localStorage.getItem(this.cKey));
    return contacts;
  }

  writeContacts(contacts) {
    return localStorage.setItem(this.cKey, JSON.stringify(contacts));
  }

  getContacts() : Observable<Contact[]> {
    return Observable.of(this.readContacts());
  }

  /*addContact(contact: Contact) {
    let contacts = this.getContacts();
    //contacts.map(val => ;
    //contacts.map(c => c.push(contact));
    this.writeContacts([]);

    this.openSnackBar("Added contact", "close");
    console.log("Adding contact: X" + JSON.stringify(contact));
  }*/

  addContact(contact: Contact) : Observable<Contact[]> {
    let contacts = this.readContacts();
    if (!contact.id) {
      let lastSaved = <Contact>_.maxBy(contacts, 'id');
      contact.id = lastSaved ? lastSaved.id + 1 : 1;
      contacts.push(contact);
    } else {
      contacts = _.map(contacts, function (c: Contact) {
        return c.id == contact.id ? contact : c;
      });
    }
    this.writeContacts(contacts);
    return contacts;
  }


  public editContact(contact: Contact){
    alert("edited" + contact);
  }

  public deleteContact(contact: Contact) : Observable<any> {
   // delete this.contacts[0];
    return Observable.of([]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
