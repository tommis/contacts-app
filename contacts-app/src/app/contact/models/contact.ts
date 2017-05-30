interface ContactI {
  _id: number;

  firstname: string;
  lastname: string;
  age: number;
  cardcolor: string;

}

export class Contact implements ContactI {
  _id: number;

  _created: Date;
  _updated: Date;
  _etag: string;

  firstname: string;
  lastname: string;
  age: number;
  cardcolor: string;

  address: string;
  addressvalid: boolean;
  imgcachekey: string;

  constructor(id?: number, created?: Date, updated?: Date, etag?: string, firstName?: string, lastName?: string, age?: number,  cardColor?: string, address?: string, addressValid?: boolean, imgCacheKey?: string) {
    this._id = id;

    this._created = created;
    this._updated = updated;
    this._etag = etag;

    this.firstname = firstName;
    this.lastname = lastName;
    this.age = age;
    this.cardcolor = cardColor;

    this.address = address;
    this.addressvalid = addressValid;
    this.imgcachekey = imgCacheKey;
  }

}
