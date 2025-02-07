export class Employee {
  id?: number;
  email?: string;
  name?: string;
  phone?: number;
  departement?: string;

  constructor(id?: number, email?: string, name?: string, phone?: number, departement?: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.departement = departement;
  }
}
