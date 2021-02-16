import React, { FunctionComponent, useState } from 'react';
import { Customer, ICustomer } from '../interfaces/Customer';

interface CustomerFormProps {
  customerProps?: ICustomer;
  onSubmit?: (customer: ICustomer) => void;
}

export const CustomerForm: FunctionComponent<CustomerFormProps> = ({
  customerProps,
  onSubmit,
}) => {
  const [customer, setCustomer] = useState<ICustomer>(
    new Customer(customerProps)
  );

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
        value={customer.firstName}
        onChange={handleChangeFirstName}
        readOnly
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={customer.lastName}
        onChange={handleChangeLastName}
        readOnly
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        value={customer.phoneNumber}
        onChange={handleChangePhoneNumber}
        readOnly
      />
    </form>
  );
};
