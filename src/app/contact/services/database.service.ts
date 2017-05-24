import { Injectable } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { ContactStore } from "./contact-store";
import { Observable } from "rxjs/Observable";
import { Contact } from "../models/contact";
import { List } from "linqts";
import { environment } from "../../../environments/environment";
import { headersToString } from "selenium-webdriver/http";

@Injectable()
export class DatabaseService  {

  private dbUrl = environment.databaseUrl;

  headers;
  options;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });

  }


  private requestOptions(contact: Contact) {

    return {
      "headers": {
        "If-Match": contact._etag
      }
    };

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
    return this.http.delete(this.dbUrl + '/contact/' + contact._id);
  }


}
