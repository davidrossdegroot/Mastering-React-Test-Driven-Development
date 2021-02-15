import React, { FunctionComponent, useState } from 'react';
import { ICustomer } from './Appointment';

interface CustomerFormProps {
  customerProps?: ICustomer;
  onSubmit?: (customer: ICustomer) => void;
}

export const CustomerForm: FunctionComponent<CustomerFormProps> = ({
  customerProps,
  onSubmit,
}) => {
  const [customer, setCustomer] = useState<ICustomer>(
    customerProps
  );
  let firstName, lastName
  if(customer) {
    firstName = customer.firstName
    lastName = customer.lastName
  }

  const handleChangeFirstName = ({target}) => {
    setCustomer({ ...customer, firstName: target.value })
  }
  const handleChangeLastName = ({target}) => {
    setCustomer({ ...customer, lastName: target.value })
  }
  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={handleChangeFirstName}        
        readOnly
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={handleChangeLastName}        
        readOnly
      />
    </form>
  );
};
