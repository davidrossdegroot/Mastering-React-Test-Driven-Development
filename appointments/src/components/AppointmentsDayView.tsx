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
    <div className="">
      <div id="appointmentsDayView">
        <ol className="flex flex-col justify-center items-center space-y-4">
          {appointments.map((appointment, index) => {
            return (
              <li
                className="ml-4 flex items-center"
                key={appointment.startsAt}>
                {appointmentTimeOfDay(appointment.startsAt)}
                <button
                  className="m-3 rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 hover:bg-blue-200"
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
