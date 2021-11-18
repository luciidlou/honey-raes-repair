import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, { method: "DELETE" })
            .then(() => {
                fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                    .then(res => res.json())
                    .then((data) => {
                        setServiceTickets(data)
                    })
            })
    }

    return (
        <>
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            <h2>Service Tickets</h2>
            {
                serviceTickets.map(ticket => {
                    if (ticket.employeeId === 0) {
                        return <div key={`ticket--${ticket.id}`} className={`${ticket.emergency ? "emergency" : "ticket"}`}>{ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>  submitted by {ticket.customer.name} and is currently UNASSIGNED
                            <button id="delete" onClick={() => { deleteTicket(ticket.id) }}>Delete</button>
                        </div>
                    }
                    else {
                        return <div key={`ticket--${ticket.id}`} className={`${ticket.emergency ? "emergency" : "ticket"}`}>{ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>  submitted by {ticket.customer.name} and is currently being worked on by {ticket.employee.name}
                            <button id="delete" onClick={() => { deleteTicket(ticket.id) }}>Delete</button>
                        </div>
                    }
                })
            }
        </>
    )
}

