interface ContactI {
  id: number;

  firstName: string;
  lastName: string;
  age: number;
  address: string;
  cardColor: string;
}

export class Contact implements ContactI {
  id: number;

  firstName: string;
  lastName: string;
  age: number;
  address: string;
  cardColor: string;

  constructor(id?: number, firstName?: string, lastName?: string, age?: number, address?: string, cardColor?: string) {
    this.id = id;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.cardColor = cardColor;
  }
}
