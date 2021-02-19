import React, { useState } from 'react';
import { ICustomer } from '../interfaces/Customer';

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
    <div className="relative bg-white overflow-hidden">
      {' '}
      yo
      <div
        className="group-hover:text-light-blue-200 px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
        id="appointmentsDayView">
        <ol className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          {appointments.map((appointment, index) => {
            return (
              <li
                className="m-3 group-hover:text-white leading-6 font-medium text-black"
                key={appointment.startsAt}>
                {appointmentTimeOfDay(appointment.startsAt)}
                <button
                  className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2"
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
    </div>
  );
};

export default Appointment;
