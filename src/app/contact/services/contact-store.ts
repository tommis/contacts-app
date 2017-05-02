import { Observable } from "rxjs/Observable";
import { Contact } from "../contact";

export interface ContactStore {
  getContacts(): Observable<Contact[]>;
  addContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
}
