import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import "./TicketList.css"

export const Ticket = () => {
    const { ticketId } = useParams()
    const [ticket, assignTicket] = useState({
        employeeId: 0
    })
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer`)
                .then(res => res.json())
                .then((data) => {
                    assignTicket(data)
                })
        },
        [ticketId]
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )

    const assignEmployee = (changeEvent) => {
        const newServiceTicketObj = {
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: parseInt(changeEvent.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newServiceTicketObj)
        }
        return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, fetchOptions)
            .then(() => {
                history.push("/tickets")
            })
    }

    return (
        <>
            <h2>Ticket Details</h2>
            <section className={`${ticket.emergency ? "emergency" : "ticket"}`}>
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by: {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to:
                    <select id="employee" value={ticket.employeeId} onChange={assignEmployee}>
                        {
                            employees.map(employee => {
                                    return <option value={employee.id} key={`employee--${employee.id}`}>{employee.name}</option>
                            })
                        }
                    </select>
                </div>
            </section>
        </>
    )
}