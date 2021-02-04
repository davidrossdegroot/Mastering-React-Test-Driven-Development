import {
  Appointment,
  AppointmentsDayView,
} from '../src/Appointment';
import ReactDOM from 'react-dom';
import React from 'react';

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
  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) },
  ];

  it('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(
      container.querySelector('div#appointmentsDayView')
    ).not.toBeNull();
  });

  it('renders appointments in an ol element', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelector('ol')).not.toBeNull();

    expect(container.querySelector('ol').children).toHaveLength(2);
  });

  it('renders each appointment in an li element', () => {
    render(<AppointmentsDayView appointments={appointments} />);

    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(
      container.querySelectorAll('li')[0].textContent
    ).toEqual('12:00');
    expect(
      container.querySelectorAll('li')[1].textContent
    ).toEqual('13:00');
  });
});
