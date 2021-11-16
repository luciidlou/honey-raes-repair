import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, updateSpecialties] = useState("")
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
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
            <button onClick ={() => {history.push("/employees/hire")}}>Hire New Employee</button>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name} ({employee.specialty})</p>
                    }
                )
            }
        </>
    )
}
