import React from "react";
import { Route } from "react-router-dom";
import { EmployeeList } from "./employees/EmployeeList";
import { ServiceTickets } from "./serviceTickets/TicketList";
import { CustomerList } from "./customers/CustomerList";

export const ApplicationViews = () => {
    return (
        <>
           <Route path="/customers">
                <CustomerList />
           </Route>
           <Route path="/employees">
                <EmployeeList />
           </Route>
           <Route path="/tickets">
                <ServiceTickets />
           </Route>
        </>
    )
}