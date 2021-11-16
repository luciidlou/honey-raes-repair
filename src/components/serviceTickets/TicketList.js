import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./TicketList.css"

export const ServiceTickets = () => {
    const [serviceTickets, setServiceTickets] = useState([])
    const history = useHistory()

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
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            <h2>Service Tickets</h2>
            {
                serviceTickets.map(ticket => {
                    return <p key={`ticket--${ticket.id}`} className={`${ticket.emergency ? "emergency" : "ticket"}`}>{ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>  
                })
            }
        </>
    )
}

