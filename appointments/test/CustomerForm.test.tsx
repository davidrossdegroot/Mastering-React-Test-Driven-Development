import React, { ReactElement } from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';
import { expectToBeInputFieldOfTypeText } from './specHelper';
import ReactTestUtils from 'react-dom/test-utils';

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

  describe('first name field', () => {
    const firstNameField = () =>
      form('customer').elements.namedItem(
        'firstName'
      ) as HTMLInputElement;

    it('renders the first name field as a text box', () => {
      render(<CustomerForm />);

      expectToBeInputFieldOfTypeText(firstNameField());
    });

    it('includes the existing value for the first name', () => {
      render(
        <CustomerForm customerProps={{ firstName: 'Ashley' }} />
      );

      expect(firstNameField().getAttribute('value')).toEqual(
        'Ashley'
      );
    });

    const labelFor: (elementName: string) => Element = (
      elementName
    ) => {
      return container.querySelector(
        `label[for="${elementName}"]`
      );
    };

    it('renders a label for the first name field', () => {
      render(<CustomerForm />);
      expect(labelFor('firstName')).not.toBeNull();
      expect(labelFor('firstName').textContent).toEqual(
        'First Name'
      );
    });

    it('assigns an id that matches the label id to the first name field', () => {
      render(<CustomerForm />);
      expect(firstNameField().id).toEqual('firstName');
    });

    it('saves existing first name when submitted', async () => {
      const customer = { firstName: 'Ashley' };
      render(
        <CustomerForm
          customerProps={customer}
          onSubmit={(customer) => {
            expect(customer.firstName).toEqual('Ashley');
          }}
        />
      );

      await ReactTestUtils.Simulate.submit(form('customer'));
      expect.hasAssertions();
    });

    it('saves the first name when submitted', async () => {
      expect.hasAssertions();

      const customer = { firstName: 'Ashley' };
      render(
        <CustomerForm
          customerProps={customer}
          onSubmit={(customer) => {
            expect(customer.firstName).toEqual('Jamie');
          }}
        />
      );
      await ReactTestUtils.Simulate.change(firstNameField(), {
        target: { value: 'Jamie' } as HTMLInputElement,
      });
      await ReactTestUtils.Simulate.submit(form('customer'));
    });
  });

  describe('last name field', () => {
    const lastNameField = () =>
      form('customer').elements.namedItem(
        'lastName'
      ) as HTMLInputElement;

    it('renders the last name field as a text box', () => {
      render(<CustomerForm />);

      expectToBeInputFieldOfTypeText(lastNameField());
    });

    it('includes the existing value for the last name', () => {
      render(
        <CustomerForm customerProps={{ lastName: 'Ashley' }} />
      );

      expect(lastNameField().getAttribute('value')).toEqual(
        'Ashley'
      );
    });

    const labelFor: (elementName: string) => Element = (
      elementName
    ) => {
      return container.querySelector(
        `label[for="${elementName}"]`
      );
    };

    it('renders a label for the last name field', () => {
      render(<CustomerForm />);
      expect(labelFor('lastName')).not.toBeNull();
      expect(labelFor('lastName').textContent).toEqual(
        'Last Name'
      );
    });

    it('assigns an id that matches the label id to the last name field', () => {
      render(<CustomerForm />);
      expect(lastNameField().id).toEqual('lastName');
    });

    it('saves existing last name when submitted', async () => {
      const customer = { lastName: 'Ashley' };
      render(
        <CustomerForm
          customerProps={customer}
          onSubmit={(customer) => {
            expect(customer.lastName).toEqual('Ashley');
          }}
        />
      );

      await ReactTestUtils.Simulate.submit(form('customer'));
      expect.hasAssertions();
    });

    it('saves the last name when submitted', async () => {
      expect.hasAssertions();

      const customer = { lastName: 'Ashley' };
      render(
        <CustomerForm
          customerProps={customer}
          onSubmit={(customer) => {
            expect(customer.lastName).toEqual('Jamie');
          }}
        />
      );
      await ReactTestUtils.Simulate.change(lastNameField(), {
        target: { value: 'Jamie' } as HTMLInputElement,
      });
      await ReactTestUtils.Simulate.submit(form('customer'));
    });
  });
});
