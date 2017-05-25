import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from './models/contact';
import { List } from "linqts";

@Component({
  selector: 'contact-view',
  template: `  <contact-list [contacts]="contacts"
                (deleteContact)="onDeleteContact($event)"
                (editContact)="onEditContact($event)"
                (select)="selectContact($event)"></contact-list>

  <button md-fab class="add-button"
          (click)="contactDialog($event)">
    <md-icon>add</md-icon>
  </button>
`
})
export class ContactViewComponent {

  constructor() {}
}
