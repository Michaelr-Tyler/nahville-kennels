import React from "react"
import "./Kennel.css"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { EmployeeProvider } from "./employee/EmployeesProvider"
import { EmployeeList } from "./employee/EmployeesList"
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList";




export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Locations</h2>
        <article className="locations">
        <LocationProvider>
            <LocationList />
        </LocationProvider>
            
        </article>

        <h2>Employees</h2>
        <article className="employees">
          <EmployeeProvider>
              <EmployeeList />
          </EmployeeProvider>
            
        </article>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
        </article>

    </>
)