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

  const field = (fieldName: string, returnType) => {
    return form('appointment').elements.namedItem(
      fieldName
    ) as typeof returnType;
  };
  it('renders a form', () => {
    render(<AppointmentForm props={{}} />);
    expect(form('appointment')).not.toBeNull();
  });

  describe('service field', () => {
    it('renders as a select box', () => {
      render(<AppointmentForm props={{}} />);
      expect(field('service', Element)).not.toBeNull();
      expect(field('service', Element).tagName).toEqual('SELECT');
    });

    it('initially has a blank value chosen', () => {
      render(<AppointmentForm props={{}} />);
      const firstNode = field('service', RadioNodeList)
        .childNodes[0];
      expect(firstNode.nodeValue).toEqual('');
      expect(firstNode.selected).toBeTruthy();
    });
  });
});
