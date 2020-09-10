import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail"
import { AnimalDetails } from "./animal/AnimalDetail"
import { AnimalSearch } from "./animal/AnimalSearch"


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            
                <Route path="/locations/:locationId(\d+)" render={
                    props => <LocationDetail {...props} />
                } />
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>



        

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={ props => {
                                return <>
                                    <AnimalSearch />
                                    <AnimalList {...props} />
                                </>
                            }
                        } />
                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />
                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                        <Route path="/animals/edit/:animalId(\d+)" render={
                            props => <AnimalForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>


            <CustomerProvider>
                <AnimalProvider>
                    <LocationProvider>
                    <Route path="/customers">
                        <CustomerList />
                        <AnimalList />
                    </Route>
                    </LocationProvider>
                </AnimalProvider>
            </CustomerProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/login")
                }
            } />

            <EmployeeProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </AnimalProvider>
                </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees" render={
                    props => <EmployeeList {...props} />
                } />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}
