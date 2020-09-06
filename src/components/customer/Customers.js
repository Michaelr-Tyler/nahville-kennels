import React from "react"

export const Customer = ({ customer }) => (
    <section key={customer.id} className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <h3 className="customer__address">{customer.address}</h3>
    </section>
)