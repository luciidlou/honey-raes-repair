export const getAllCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees`)
        .then(res => res.json())
}

export const getAllServiceTickets = () => {
    return fetch(`http://localhost:8088/serviceTickets?_expand=customer&_expand=employee`)
        .then(res => res.json())
}

export const deleteTicketById = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, { method: "DELETE" })
}

export const postTicket = (ticketObj) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketObj)
    }
    return fetch(`http://localhost:8088/serviceTickets`, fetchOption)
}

export const postEmployee = (ticketObj) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketObj)
    }
    return fetch(`http://localhost:8088/employees`, fetchOption)
}