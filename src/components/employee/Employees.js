import React from "react"
import "./Employees.css"

export const Employee = ({ employee }) => (
    <section key={employee.id} className="employee">
        <div className="employee__name">{employee.name}</div>
    </section>
)