import React from "react"
import "./Locations.css"

export const Location = ({ location }) => (
    <section key={location.id} className="location">
        <div className="location__name">{location.name}</div>
        <div className="location__address">{location.address}</div>
    </section>
)