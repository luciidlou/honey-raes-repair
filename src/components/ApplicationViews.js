import React from "react";
import { Route } from "react-router-dom";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { ServiceTickets } from "./serviceTickets/TicketList";
import { CustomerList } from "./customers/CustomerList";
import { TicketForm } from "./serviceTickets/TicketForm";
import { Ticket } from "./serviceTickets/Ticket";
import { Employee } from "./employees/Employee";

export const ApplicationViews = () => {
     return (
          <>
               <Route exact path="/customers">
                    <CustomerList />
               </Route>
               <Route exact path="/employees">
                    <EmployeeList />
               </Route>
               <Route exact path="/employees/:employeeId(\d+)">
                    <Employee />
               </Route>
               <Route exact path="/employees/hire">
                    <EmployeeForm />
               </Route>
               <Route exact path="/tickets">
                    <ServiceTickets />
               </Route>
               <Route exact path="/tickets/:ticketId(\d+)">
                    <Ticket />
               </Route>
               <Route exact path="/tickets/create">
                    <TicketForm />
               </Route>
          </>
     )
}