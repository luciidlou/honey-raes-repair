import React, { useEffect, useState } from "react"

export const ServiceTickets = () => {
    const [serviceTickets, setServiceTickets] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((data) => {
                    setServiceTickets(data)
                })
        },
        []
    )
    return (
        <>
            <h2>Service Tickets</h2>
            {
                serviceTickets.map(ticket => {
                    return <p key={`ticket--${ticket.id}`}>{ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                })
            }
        </>
    )
}