import Appointment from '../src/Appointment';
import ReactDOM from 'react-dom';
import React from 'react';

describe('Appointment', () => {
  let customer;
  const container = document.createElement('div');
  const render = component => ReactDOM.render(component, container)
  it('renders the customer first name', () => {
    const firstName = 'Ashley';
    customer = { firstName };
    render(<Appointment customer={customer}/>)
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer}/>)
    expect(container.textContent).toMatch('Jordan');
  });
});
