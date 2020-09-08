import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { Employee } from "./Employees"
import "./Employees.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(
        () => { 
            getEmployees()
         }, []
    )

    useEffect(
        () => {},
         [employees] 
    )

    return (
        <article className="employees">
            {
                employees.map(emp => <Employee key={emp.id} employee={emp} />)
            }
        </article>
    )
    
}