import {
  Appointment,
  AppointmentsDayView,
} from '../src/Appointment';
import ReactDOM from 'react-dom';
import React, { createElement, ReactComponentElement } from 'react';
import { create } from 'domain';

describe('Appointment', () => {
  let customer;
  const container = document.createElement('div');
  const render = (component) =>
    ReactDOM.render(component, container);
  it('renders the customer first name', () => {
    const firstName = 'Ashley';
    customer = { firstName };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders the customer first name', () => {
    customer = { firstName: 'Jordan' };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });
});

describe('AppointmentsDayView', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => {
    ReactDOM.render(component, container);
  };

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(
      container.querySelector('div#appointmentsDayView')
    ).not.toBeNull();
  });
});
