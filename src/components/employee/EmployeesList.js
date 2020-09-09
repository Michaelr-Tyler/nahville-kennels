import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { Employee } from "./Employees"
import "./Employees.css"


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(
        () => { 
            getEmployees()
         }, []
    )


    return (
        <section className="flex">
    <div className="employees">
        <h1>Employees</h1>
        <button onClick={() => props.history.push("/employees/create")}>
            Add Employee
        </button>
        <article className="employeeList">
        {employees.map(emp => <Employee key={emp.id} employee={emp} />)}
        </article>
        
    </div>
    </section>
)

    
}