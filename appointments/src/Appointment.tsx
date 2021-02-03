import React from 'react'

interface Customer {
    firstName: string
}

interface AppointmentProps {
    customer: Customer
}

interface AppointmentDayViewProps {
    appointments: []
}

export const Appointment: React.FC<AppointmentProps> = (props: AppointmentProps) => {
    return <div>{props.customer.firstName}</div>
}

export const AppointmentsDayView: React.FC<any> = ({ appointments: any }) => {
    return null
}

export default Appointment