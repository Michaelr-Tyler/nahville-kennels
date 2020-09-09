import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"
import { Animal } from "./Animals"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"


export const AnimalList = (props) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(
        () => { 
            getAnimals()
            getCustomers()
            getLocations()
         } ,
         []
    )

    return (
        <article className="Animals">
            <button onClick={() => props.history.push("/animals/create")}>
            Add Animal
            </button>
            {    
            animals.map(animal => {
                const owner = customers.find(c=> c.id === animal.customerId) || {}
                const clinic = locations.find(l=> l.id === animal.locationId) || {}
                return <Animal key={animal.id} animal={animal} customer={owner} location={clinic} />})}
        </article>
    )
    
}