import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"
import { Animal } from "./Animals"


export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(
        () => { 
            getAnimals()
         } ,
         []
    )

    useEffect(
        () => { 
         } ,
         [animals])

    return (
        <article className="Animals">
            {
                animals.map(animal => <Animal key={animal.id} animal={animal} />)
            }
        </article>
    )
    
}