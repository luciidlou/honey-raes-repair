import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, updateSpecialties] = useState("")
    const history = useHistory()
    
    useEffect(
        () => {
            getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const employeeSpecialties = employees.map(employee => {
            return employee.specialty
        })
        updateSpecialties(employeeSpecialties.join(", "))
    }, [employees])

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={() => { history.push("/employees/hire") }}>Hire New Employee</button>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
