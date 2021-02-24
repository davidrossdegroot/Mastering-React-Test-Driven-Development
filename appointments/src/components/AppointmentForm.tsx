import React, { ReactHTMLElement } from 'react';

interface AppointmentFormProps {
  selectableServices?: string[];
}

export const AppointmentForm: React.FC<AppointmentFormProps> = (
  props: AppointmentFormProps
) => {
  return (
    <div className="pt-9 mx-auto container text-lg">
      <form className="m-6 flex justify-center" id="appointment">
        <select name="service" id="">
          {props.selectableServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

AppointmentForm.defaultProps = {
  selectableServices: [
    '',
    'Cut',
    'Blow-Dry',
    'Beard Trim',
    'Cut & Color',
    'Extensions',
  ],
};
