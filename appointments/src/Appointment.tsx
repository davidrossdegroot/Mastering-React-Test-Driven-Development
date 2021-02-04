import React from 'react';

interface Customer {
  firstName: string;
}

interface AppointmentIProps {
  customer?: Customer;
  startsAt?: number;
}

interface AppointmentDayViewIProps {
  appointments: AppointmentIProps[];
}

export const Appointment: React.FC<AppointmentIProps> = (
  props: AppointmentIProps
) => {
  return <div>{props.customer.firstName}</div>;
};

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const AppointmentsDayView: React.FC<AppointmentDayViewIProps> = (
  props: AppointmentDayViewIProps
) => {
  const { appointments } = props;
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment) => {
          return (
            <li key={appointment.startsAt}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Appointment;
