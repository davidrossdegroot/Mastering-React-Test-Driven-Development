import React from 'react';
import { createContainer } from '../domManipulators';
import { AppointmentForm } from '../../src/components/AppointmentForm';
describe('AppointmentForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });
  const form: (id: string) => HTMLFormElement = (id) => {
    return container.querySelector(`form[id="${id}"]`);
  };

  const field = <T extends unknown>(fieldName: string) => {
    return form('appointment').elements.namedItem(fieldName) as T;
  };

  it('renders a form', () => {
    render(<AppointmentForm />);
    expect(form('appointment')).not.toBeNull();
  });

  describe('service field', () => {
    it('renders as a select box', () => {
      render(<AppointmentForm />);
      expect(field('service')).not.toBeNull();
      expect(field<Element>('service').tagName).toEqual('SELECT');
    });

    it('initially has a blank value chosen', () => {
      render(<AppointmentForm />);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const firstNode = field<any>('service').childNodes[0];
      expect(firstNode.value).toEqual('');
      expect(firstNode.selected).toBeTruthy();
    });

    it('lists all salon services', () => {
      const selectableServices: string[] = ['Cut', 'Blow-dry'];
      render(
        <AppointmentForm selectableServices={selectableServices} />
      );

      const optionNodes = Array.from(
        field<Element>('service').childNodes
      );
      const renderedServices = optionNodes.map(
        (node) => node.textContent
      );
      expect(renderedServices).toEqual(
        expect.arrayContaining<string>(selectableServices)
      );
    });
  });
});
