import React, { FunctionComponent } from 'react';
import { ICustomer } from './Appointment';

export const CustomerForm: FunctionComponent<ICustomer> = (
  params: ICustomer
) => {
  return (
    <form id="customer">
      <input
        type="text"
        name="firstName"
        id=""
        value={params.firstName}
        onChange={() => null}
      />
    </form>
  );
};
