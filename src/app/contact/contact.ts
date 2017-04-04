export class Contact {
  id: number;

  firstName: string;
  lastName: string;
  age: number;
  address: string;

  constructor(id: number, firstName?: string, lastName?: string, age?: number, address?: string) {
    this.id = id;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
}
