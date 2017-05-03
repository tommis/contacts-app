///<reference path="../contact.ts"/>
import { Injectable, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { MdSnackBar } from "@angular/material";
import { Observable } from "rxjs";
import * as _ from 'lodash';
import { ContactStore } from "./contact-store";
import { List } from 'linqts';

@Injectable()
export class ContactService implements ContactStore {

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
    let contacts = new List<Contact>(JSON.parse(localStorage.getItem(this.cKey)));
    return contacts;
  }

  writeContacts(contacts) {
    return localStorage.setItem(this.cKey, JSON.stringify(contacts));
  }

  getContacts() : Observable<List<Contact>> {
    return Observable.of(this.readContacts());
  }

  addContact(contact: Contact) : Observable<List<Contact>> {
    let contacts = this.readContacts();
    if (!contact.id) {
      let lastSaved = contacts.Select(c => c.id != null).Max();
      contact.id = lastSaved ? lastSaved + 1 : 1;
      contacts.Add(contact);
    } else {
      contacts = _.map(contacts, function (c: Contact) {
        return c.id == contact.id ? contact : c;
      });
    }
    this.writeContacts(contacts);
    return Observable.of(contacts);
  }

  public editContact(contact: Contact) {

    return;
  }

  public deleteContact(contact: Contact) : Observable<any> {
    let contacts = this.readContacts();

    return Observable.of(
      this.writeContacts(contacts.Where(c => c.id != contact.id).ToArray())
    );
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
