import { Observable } from "rxjs/Observable";
import { Contact } from "../contact";
import { List } from "linqts";

export interface ContactStore {
  getContacts(): Observable<List<Contact>>;
  addContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;

}
