import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { ContactService } from "../services/contact.service";
import { Contact } from "../contact";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  contact: Contact;
  isValid: boolean;

  contactForm: NgForm;
  @ViewChild('contactForm') currentForm: NgForm;

  colorOptions = [
    {"color": "Red", "value" : "#F44336"},
    {"color": "Pink", "value" : "#E91E63"},
    {"color": "Purple" , "value": "#9C27B0"},
    {"color": "Deep Purple", "value" : "#673AB7"},
    {"color": "Indigo", "value" : "#3F51B5"},
    {"color": "Blue", "value" : "#2196F3"},
    {"color": "Light blue", "value" : "#03A9F4"},
    {"color": "Cyan", "value" : "#00BCD4"},
    {"color": "Teal", "value" : "#009688"},
    {"color": "Green", "value" : "#4CAF50"},
    {"color": "Light green", "value" : "#8BC34A"},
    {"color": "Lime", "value" : "#CDDC39"},
    {"color": "Yellow" , "value": "#FFEB3B"},
    {"color": "Amber", "value" : "#FFC107"},
    {"color": "Orange", "value" : "#FF9800"},
    {"color": "Deep orange", "value" : "#FF5722"},
    {"color": "Brown", "value" : "#795548"},
    {"color": "Grey", "value" : "#9E9E9E"},
    {"color": "Blue grey", "value" : "#607D8B"},
  ];

  constructor(public dialogRef: MdDialogRef<ContactDialogComponent>, private contactService: ContactService) { this.isValid = false; }


  ngOnInit(): void {
    if (!this.contact) {
      this.contact = new Contact();
    }
    this.validate();
  }

  addNewContact(contact: Contact){
    this.contactService.addContact(contact);
    this.dialogRef.close();
  }

  validate() {
    this.isValid = !(this.contact.firstName && this.contact.lastName);
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.contactForm) { return; }
    this.contactForm = this.currentForm;
    if (this.contactForm) {
      this.contactForm.valueChanges
        .subscribe(data => this.validate());
    }
  }


  getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }

}
