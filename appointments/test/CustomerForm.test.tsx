import React, { ReactElement } from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';
import { expectToBeInputFieldOfTypeText } from './specHelper';

describe('CustomerForm', () => {
  let render: (component: ReactElement) => void, container: HTMLElement;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form: (id: string) => HTMLFormElement  = (id: string) => container.querySelector(`form[id="${id}"]`);
  const firstNameField = () => form('customer').elements.namedItem('firstName') as HTMLInputElement;

  it('renders a form', () => {
    render(<CustomerForm />);

    expect(form('customer')).not.toBeNull();
  });

  it('renders the first name field as a text box', () => {
    render(<CustomerForm />);

    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName="Ashley" />);

    expect(firstNameField().getAttribute("value")).toEqual('Ashley');
  });
});
