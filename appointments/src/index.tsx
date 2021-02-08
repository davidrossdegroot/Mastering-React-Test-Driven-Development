import ReactDOM from 'react-dom'
import React from 'react'
import { AppointmentsDayView } from "./Appointment";
import { sampleAppointments } from "./sampleData";

ReactDOM.render(<AppointmentsDayView appointments={sampleAppointments} />, 
    document.getElementById('root'))
