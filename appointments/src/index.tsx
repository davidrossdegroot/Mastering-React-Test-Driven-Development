import ReactDOM from 'react-dom';
import React from 'react';
import { AppointmentsDayView } from './components/AppointmentsDayView';
import { sampleAppointments } from './sampleData';

ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments} />,
  document.getElementById('root')
);
