export interface ICustomer {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export class Customer implements ICustomer {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  constructor(customer: ICustomer) {
    if (customer) {
      this.firstName = customer.firstName;
      this.lastName = customer.lastName;
      this.phoneNumber = customer.phoneNumber;
    }
  }
}
