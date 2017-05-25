import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Contact } from "../models/contact";

@Injectable()
export class MapsImageService {

  constructor(private http: Http) { }

  generateCacheKey() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < 5; i++ )
         text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  /* download google maps image for address
   * returns image cache key  */
  public downloadMapsImage(contact: Contact) : Contact {
    let address = contact.address;
    let mapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${address}&size=400x175`;

    let res = this.http.get(mapsUrl).subscribe(this.extractData);

    if (res) {
      contact.addressvalid = true;
    }

    return contact;
  }

  extractData(res: Response) {
    let image = "";

    return image || { };
  }

  getImage(key)  {

  }

  private cacheImage(key) {

  }
}
