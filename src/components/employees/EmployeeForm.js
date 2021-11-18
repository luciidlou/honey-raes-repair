import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
    const [newEmployee, update] = useState({
        name: "",
        specialty: "",
    })
    const history = useHistory()

    const finalizeHire = (event) => {
        event.preventDefault()

        const employee = {
            name: newEmployee.name,
            specialty: newEmployee.specialty
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="hireForm">
            <h2 className="hireForm__title">New Hire Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of new hire"
                        onChange={
                            (event) => {
                                const copy = { ...newEmployee }
                                copy.name = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Repair Specialty"
                        onChange={
                            (event) => {
                                const copy = { ...newEmployee }
                                copy.specialty = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={finalizeHire}>Finalize Hire</button>
            <button className="btn btn-primary" onClick={() => history.push("/employees")}>Cancel Hire</button>
        </form>
    )
}