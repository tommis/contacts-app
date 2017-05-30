///<reference path="../../../../node_modules/@angular/http/src/interfaces.d.ts"/>
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";

import { Contact } from "../models/contact";
import { environment } from "../../../environments/environment";


@Injectable()
export class DatabaseService  {
  private dbUrl = environment.databaseUrl;
  private dbUrlContacts = this.dbUrl + "/contacts/";

  constructor(private http: Http) { }

  private requestOptions(etag?: string): RequestOptions {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json')
    if (etag) {
      headers.append('If-Match', etag);
    }

    return new RequestOptions({headers: headers});
  }

  prepareContact(contact: Contact) {

  }

  private cleanUp(contact: Contact) {
      const copy = {};
      let keys = ['firstname', 'lastname', 'age', 'address', 'cardcolor', 'address', 'addressvalid', 'imgcachekey'];

      keys.forEach(key => copy[key] = contact[key]);

      return copy as Contact;
  }

  getContacts() {
    return this.http.get(this.dbUrlContacts).map(res => res.json());
  }

  addContact(contact: Contact) {
    if(contact._id) {
      let id = contact._id;
      let etag = contact['_etag'];

      return this.http.patch(this.dbUrlContacts + id, JSON.stringify(this.cleanUp(contact)), this.requestOptions(etag));
    }
    else {
      return this.http.post(this.dbUrlContacts, JSON.stringify(this.cleanUp(contact)), this.requestOptions());
    }
  }

  deleteContact(contact: Contact) {
    return this.http.delete(this.dbUrlContacts + contact._id, this.requestOptions(contact._etag));
  }


}
