///<reference path="../../../../node_modules/@angular/http/src/interfaces.d.ts"/>
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

import { ContactStore } from "./contact-store";
import { Observable } from "rxjs/Observable";
import { Contact } from "../models/contact";
import { List } from "linqts";
import { environment } from "../../../environments/environment";
import { headersToString } from "selenium-webdriver/http";

@Injectable()
export class DatabaseService  {

  private dbUrl = environment.databaseUrl;

  constructor(private http: Http) {

  }


  private requestOptions(contact: Contact): RequestOptions {
    let headers: Headers = new Headers();
    headers.append('If-Match', contact._etag);
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    return new RequestOptions({ headers: headers });
  }

  readContacts() {
    return this.http.get(this.dbUrl + "/contacts").map(res => res.json());
  }

  writeContacts() {

  }

  getContacts() {
    return this.http.get("http://localhost:5000/contact").map(res => res.json());
  }

  addContact(contact: Contact) {
    return this.http.post(this.dbUrl + "/contact", JSON.stringify(contact), {});
  }

  deleteContact(contact: Contact) {
    return this.http.delete(this.dbUrl + '/contact/' + contact._id, this.requestOptions(contact));
  }


}
