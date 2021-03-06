import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"


export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(
        () => { 
            getCustomers()
         }, []
    )

    return (
        <article className="customers">
            {
                customers.map(cust => <Customer key={cust.id} customer={cust} />)
            }
        </article>
    )
    
}