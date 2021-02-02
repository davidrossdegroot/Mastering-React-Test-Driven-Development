import React from 'react'

interface Customer {
    firstName: string
}

interface Props {
    customer: Customer
}

const Appointment: React.FC<Props> = (props: Props) => {
    return <div>{props.customer.firstName}</div>
}

export default Appointment