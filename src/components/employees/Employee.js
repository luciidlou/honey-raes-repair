import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const Employee = () => {
    const {employeeId} = useParams()
    const [employee, assignEmployee] = useState({})

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        assignEmployee(data)
                    })
        },
        [employeeId]
    )

    return (
        <>
            <h2>Employee Details</h2>
            <section className="employee">
                <div className="employee__name">Name: {employee.name}</div>
                <div className="employee__specialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}