import React, { FunctionComponent, useState } from 'react';
import { ICustomer } from './Appointment';

interface CustomerFormProps {
  customerProps?: ICustomer;
  onSubmit?: (customer: ICustomer) => void;
}

class Customer implements ICustomer {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export const CustomerForm: FunctionComponent<CustomerFormProps> = ({
  customerProps,
  onSubmit,
}) => {
  const [customer, setCustomer] = useState<ICustomer>(
    customerProps
  );
  let customerClone = new Customer();
  if (customer) {
    customerClone = customer;
  }

  const handleChangeFirstName = ({ target }) => {
    setCustomer({ ...customer, firstName: target.value });
  };
  const handleChangeLastName = ({ target }) => {
    setCustomer({ ...customer, lastName: target.value });
  };
  const handleChangePhoneNumber = ({ target }) => {
    setCustomer({ ...customer, phoneNumber: target.value });
  };
  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={customerClone.firstName}
        onChange={handleChangeFirstName}
        readOnly
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={customerClone.lastName}
        onChange={handleChangeLastName}
        readOnly
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={customerClone.phoneNumber}
        onChange={handleChangePhoneNumber}
        readOnly
      />
    </form>
  );
};
