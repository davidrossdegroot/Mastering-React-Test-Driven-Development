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
  const firstName = customer ? customer.firstName : "";
  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(e) =>
          setCustomer({ ...{ firstName: e.target.value } })
        }
        readOnly
      />
    </form>
  );
};
