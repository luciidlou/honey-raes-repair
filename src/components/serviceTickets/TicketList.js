import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllServiceTickets, deleteTicketById } from "../ApiManager"
import "./TicketList.css"


export const ServiceTickets = () => {
    const [serviceTickets, setServiceTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllServiceTickets()
                .then((data) => {
                    setServiceTickets(data)
                })
        },
        []
    )

    const deleteTicket = (id) => {
        deleteTicketById(id)
            .then(() => {
                getAllServiceTickets()
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

