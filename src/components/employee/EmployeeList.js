import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link } from "react-router-dom"
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeList = props => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { Locations, getLocations } = useContext(LocationContext)


    useEffect(() => {
        getEmployees().then(getLocations)
    }, [])

    return (
        <div>
            <h1>Employees</h1>

            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className="employees">
                {
                    employees.map(employee => {
                            return <section key={employee.id} className="employee">
                        <Link  to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                        </section>
                    })
                }
            </article>
        </div>
    )
}