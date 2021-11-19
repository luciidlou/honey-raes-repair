import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { postTicket } from "../ApiManager";

export const TicketForm = () => {
    const [ticket, update] = useState({
        description: "",
        emergency: false
    });
    const history = useHistory()

    const submitTicket = (event) => {
        event.preventDefault()

        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            employeeId: 0,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            dateCompleted: ""
        }
        postTicket(newTicket)
            .then(() => {
                history.push("/tickets")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (event) => {
                                const copy = { ...ticket }
                                copy.description = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = { ...ticket }
                                copy.emergency = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}>Submit Ticket</button>
            <button className="btn btn-primary" onClick={() => history.push("/tickets")}>Cancel Ticket</button>
        </form>
    )
}
