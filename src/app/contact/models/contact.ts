interface ContactI {
  id: number;

  firstName: string;
  lastName: string;
  age: number;
  cardColor: string;

}

export class Contact implements ContactI {
  id: number;

  firstName: string;
  lastName: string;
  age: number;
  cardColor: string;

  address: string;
  addressValid: boolean;
  imgCacheKey: string;

  constructor(id?: number, firstName?: string, lastName?: string, age?: number,  cardColor?: string, address?: string, addressValid?: boolean, imgCacheKey?: string) {
    this.id = id;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.cardColor = cardColor;

    this.address = address;
    this.addressValid = addressValid;
    this.imgCacheKey = imgCacheKey;
  }
}
