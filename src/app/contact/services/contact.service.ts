///<reference path="../contact.ts"/>
import { Injectable, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { MdSnackBar } from "@angular/material";
import { isNullOrUndefined } from "util";
import { and } from "@angular/router/src/utils/collection";

@Injectable()
export class ContactService implements OnInit {
 // contacts;

  private cKey= "contacts";

  constructor(public snackBar: MdSnackBar) {
  //  this.contacts = [new Contact(0, "tommi", "saira", 21, "lpr"), new Contact(1, "valtteri", "virtanen", 0, ""), new Contact(0, "", "", 0, "")];
    let c = localStorage.getItem(this.cKey);
    if (this.isJSON(c) && c.length < 15)
      localStorage.setItem(this.cKey, JSON.stringify({"contacts": []}));

  }

  ngOnInit() {
  }

  isJSON(str) : boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  getContacts() : Contact[] {
    let contacts = JSON.parse(localStorage.getItem(this.cKey));
    return contacts as Contact[];
  }

  addContact(contact: Contact) {
    let contacts = this.getContacts();
    contacts.push(contact);
    localStorage.setItem(this.cKey, JSON.stringify(contacts));
    this.openSnackBar("Added contact", "close");
    console.log("Adding contact: X" + JSON.stringify(contact));
  }

  public editContact(contact: Contact) {
    alert("edited" + contact);
  }

  public deleteContact(contact: Contact) {
   // delete this.contacts[0];
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
