import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeesProvider"
import { EmployeeList } from "./employee/EmployeesList"


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            <CustomerProvider>
                <AnimalProvider>
                    <LocationProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                    <Route path="/customers">
                        <CustomerList />
                        <AnimalList />
                    </Route>
                    </LocationProvider>
                </AnimalProvider>
            </CustomerProvider>
            <EmployeeProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}
