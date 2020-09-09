import React, { useContext, useRef, useEffect } from "react"

import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animals.css"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const name= useRef()
    const breed= useRef()
    const location= useRef()
    const customer= useRef()

    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])

    const newAnimal = () => {
        const customerId = parseInt(customer.current.value)
        const locationId = parseInt(location.current.value)

        if(locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                locationId,
                treatment: "",
                customerId
            })
            .then(() => props.history.push("/animals"))
        }
    }
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="animalName">Animal name: </label>
                <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="animalBreed">Animal breed: </label>
                <input type="text" id="animalBreed" ref={breed} required autoFocus className="form-control" placeholder="Animal breed" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Assign to employee: </label>
                    <select defaultValue="" name="customer" ref={customer} id="animalCustomer" className="form-control" >
                        <option value="0">Select an employee</option>
                        {customers.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
            onClick={evt=> {
                evt.preventDefault()
                newAnimal()
            }}
            className="btn btn-primary">
                Save Animal
            </button>
        
        </form>
    )
}