import React from "react";
import { Route } from "react-router-dom";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { ServiceTickets } from "./serviceTickets/TicketList";
import { CustomerList } from "./customers/CustomerList";
import { TicketForm } from "./serviceTickets/TicketForm";

export const ApplicationViews = () => {
     return (
          <>
               <Route path="/customers">
                    <CustomerList />
               </Route>
               <Route exact path="/employees">
                    <EmployeeList />
               </Route>
               <Route path="/employees/hire">
                    <EmployeeForm />
               </Route>
               <Route exact path="/tickets">
                    <ServiceTickets />
               </Route>
               <Route path="/tickets/create">
                    <TicketForm />
               </Route>
          </>
     )
}