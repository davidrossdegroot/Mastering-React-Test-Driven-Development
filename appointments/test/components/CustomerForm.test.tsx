import React, { ReactElement } from 'react';
import { createContainer } from '../domManipulators';
import { CustomerForm } from '../../src/components/CustomerForm';
import { expectToBeInputFieldOfTypeText } from '../specHelper';
import ReactTestUtils from 'react-dom/test-utils';
import { ICustomer } from '../../src/interfaces/Customer';

describe('CustomerForm', () => {
  let render: (component: ReactElement) => void,
    container: HTMLElement;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form: (id: string) => HTMLFormElement = (id: string) =>
    container.querySelector(`form[id="${id}"]`);

  it('renders a form', () => {
    render(<CustomerForm />);

    expect(form('customer')).not.toBeNull();
  });

  const field = (fieldName: string) =>
    form('customer').elements.namedItem(
      fieldName
    ) as HTMLInputElement;

  const itRendersAsATextBox = (fieldName: string) => {
    it('renders the field as a text box', () => {
      render(<CustomerForm />);

      expectToBeInputFieldOfTypeText(field(fieldName));
    });
  };
  const itIncludesTheExistingValue = (
    fieldName: string,
    customer: ICustomer
  ) => {
    it('includes the existing value', () => {
      render(<CustomerForm customerProps={customer} />);

      expect(field(fieldName).getAttribute('value')).toEqual(
        'Ashley'
      );
    });
  };

  const itRendersALabel = (fieldName: string, label: string) => {
    it('renders a label for the field', () => {
      render(<CustomerForm />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(label);
    });
  };

  const labelFor: (elementName: string) => Element = (
    elementName
  ) => {
    return container.querySelector(`label[for="${elementName}"]`);
  };

  const itAssignsAnIdThatMatchesTheLabel = (fieldName: string) => {
    it('assigns an id that matches the label id to the field', () => {
      render(<CustomerForm />);
      expect(field(fieldName).id).toEqual(fieldName);
    });
  };

  const itSavesExistingValueWhenSubmitted = (
    customer: ICustomer
  ) => {
    it('saves existing value when submitted', async () => {
      render(
        <CustomerForm
          customerProps={customer}
          onSubmit={(customer) => {
            expect(customer).toEqual(customer);
          }}
        />
      );

      await ReactTestUtils.Simulate.submit(form('customer'));
      expect.hasAssertions();
    });
  };

  const itSavesWhenSubmitted = (
    initialCustomer: ICustomer,
    newCustomer: ICustomer
  ) => {
    it('saves when submitted', async () => {
      const fieldName: string = Object.keys(initialCustomer)[0];
      expect.hasAssertions();
      render(
        <CustomerForm
          customerProps={initialCustomer}
          onSubmit={(customer) => {
            expect(customer[fieldName]).toEqual(
              newCustomer[fieldName]
            );
          }}
        />
      );
      await ReactTestUtils.Simulate.change(field(fieldName), {
        target: {
          value: newCustomer[fieldName],
        } as HTMLInputElement,
      });
      await ReactTestUtils.Simulate.submit(form('customer'));
    });
  };

  describe('first name field', () => {
    itRendersAsATextBox('firstName');

    itIncludesTheExistingValue('firstName', {
      firstName: 'Ashley',
    });

    itRendersALabel('firstName', 'First Name');

    itAssignsAnIdThatMatchesTheLabel('firstName');

    itSavesExistingValueWhenSubmitted({ firstName: 'Ashley' });

    itSavesWhenSubmitted(
      { firstName: 'Ashley' },
      { firstName: 'Jamie' }
    );
  });

  describe('last name field', () => {
    itRendersAsATextBox('lastName');

    itIncludesTheExistingValue('lastName', { lastName: 'Ashley' });

    itRendersALabel('lastName', 'Last Name');

    itAssignsAnIdThatMatchesTheLabel('lastName');

    itSavesExistingValueWhenSubmitted({ lastName: 'Ashley' });

    itSavesWhenSubmitted(
      { lastName: 'Ashley' },
      { lastName: 'Jamie' }
    );
  });

  describe('phone number field', () => {
    itRendersAsATextBox('phoneNumber');

    itIncludesTheExistingValue('phoneNumber', {
      phoneNumber: 'Ashley',
    });

    itRendersALabel('phoneNumber', 'Phone Number');

    itAssignsAnIdThatMatchesTheLabel('phoneNumber');

    itSavesExistingValueWhenSubmitted({ phoneNumber: 'Ashley' });

    itSavesWhenSubmitted(
      { phoneNumber: 'Ashley' },
      { phoneNumber: 'Jamie' }
    );
  });
});
