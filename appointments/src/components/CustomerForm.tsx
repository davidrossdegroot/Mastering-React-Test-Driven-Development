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

  const handleChange = (target: HTMLInputElement) => {
    setCustomer({ ...customer, [target.name]: target.value });
  };
  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <div className="flex items-baseline mt-4 mb-6 dark:text-gray-100 justify-center items-center space-y-4">
        <div className="space-x-2 flex">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              Customer Form
            </h1>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={customer.firstName}
              onChange={(e) =>
                handleChange(e.target as HTMLInputElement)
              }
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={customer.lastName}
              onChange={(e) =>
                handleChange(e.target as HTMLInputElement)
              }
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={customer.phoneNumber}
              onChange={(e) =>
                handleChange(e.target as HTMLInputElement)
              }
            />
            <input
              className="w-1/4 flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-700 text-white dar"
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
