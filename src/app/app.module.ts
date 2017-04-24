import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';

import { ContactService } from './contact/services/contact.service';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item.component';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    ContactService,
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
