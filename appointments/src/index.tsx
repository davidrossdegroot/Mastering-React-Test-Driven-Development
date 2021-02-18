import ReactDOM from 'react-dom';
import React from 'react';
import { AppointmentsDayView } from './components/AppointmentsDayView';
import { sampleAppointments } from './sampleData';
import { CustomerForm } from './components/CustomerForm';
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments} />,
  document.getElementById('appointments')
);
ReactDOM.render(
  <CustomerForm />,
  document.getElementById('customerForm')
);
