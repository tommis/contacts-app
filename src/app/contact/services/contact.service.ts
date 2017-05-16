///<reference path="../contact.ts"/>
import { Injectable, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { MdSnackBar } from "@angular/material";
import { Observable } from "rxjs";
import { ContactStore } from "./contact-store";
import { List } from 'linqts';
import { MapsImageService } from "./maps-image.service";

@Injectable()
export class ContactService implements ContactStore {

  private cKey= "contacts";

  constructor(public mapsImageService: MapsImageService, public snackBar: MdSnackBar) {
    let c = localStorage.getItem(this.cKey);
    if (!this.isJSON(c))
      this.initLocalStorage();
  }

  private isJSON(str) : boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  private initLocalStorage() {
    localStorage.setItem(this.cKey, JSON.stringify([]));
  }

  readContacts() {
    let contacts = new List<Contact>(JSON.parse(localStorage.getItem(this.cKey)));
    return contacts;
  }

  writeContacts(contacts) {
    return localStorage.setItem(this.cKey, JSON.stringify(contacts.ToArray()));
  }

  getContacts() : Observable<List<Contact>> {
    return Observable.of(this.readContacts());
  }

  /* Add contact to db. if contact.id exists it modifies existing
     contact otherwise it creates a new one. */
  addContact(contact: Contact) : Observable<List<Contact>> {
    let contacts = this.readContacts();
    if (!contact.id) {
      let lastSaved = contacts.Count();
      contact.id = lastSaved ? lastSaved + 1 : 1;
    } else {
      let c = this.removeContact(contact);
      contacts = c ? c : new List<Contact>();
    }

    this.mapsImageService.downloadMapsImage(contact);

    contacts.Add(contact);

    this.writeContacts(contacts);
    return Observable.of(contacts);
  }

  /* Deletes contact from localstorage */
  public deleteContact(contact: Contact) : Observable<any> {
    let contacts = this.deleteContact(contact);

    return Observable.of(
      this.writeContacts(contacts)
    );
  }

  /* Removes contact but doesn't write localstorage */
  public removeContact(contact: Contact) : List<Contact> {
    let contacts = this.readContacts().Where(c => c.id != contact.id);

    return contacts;
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
