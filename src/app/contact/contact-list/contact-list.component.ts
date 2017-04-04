import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() select: EventEmitter<Contact>;

  constructor() {
    this.select = new EventEmitter();
  }

  ngOnInit() {
  }

  selectContact(contact: Contact) {
    this.select.emit(contact);
  }

}
