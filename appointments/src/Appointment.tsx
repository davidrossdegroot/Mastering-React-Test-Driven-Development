import React, { useState } from 'react';

export interface ICustomer {
  firstName?: string;
  lastName?: string
  phoneNumber?: string
}

interface AppointmentIProps {
  customer?: ICustomer;
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
  const [
    selectedAppointment,
    setSelectedAppointment,
  ] = useState<number>(0);
  const { appointments } = props;
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, index) => {
          return (
            <li key={appointment.startsAt}>
              {appointmentTimeOfDay(appointment.startsAt)}
              <button
                onClick={() => setSelectedAppointment(index)}
                type="button">
                {appointmentTimeOfDay(appointment.startsAt)}
              </button>
            </li>
          );
        })}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};

export default Appointment;
