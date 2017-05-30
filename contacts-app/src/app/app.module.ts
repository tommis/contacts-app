import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactViewComponent } from "./contact/contact-view.component";
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list/contact-list-item.component';

import { LocalstorageService } from './contact/services/localstorage.service';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { MapsImageService } from "./contact/services/maps-image.service";
import { MapsImageComponent } from './contact/maps-image/maps-image.component';
import { ContactService } from "./contact/services/contact.service";
import { DatabaseService } from "./contact/services/database.service";
import { SnackBarService } from "./contact/services/snackbar.service";


@NgModule({
  declarations: [
    AppComponent,
    ContactViewComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapsImageComponent,
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
    DatabaseService,
    LocalstorageService,
    MapsImageService,
    SnackBarService
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
