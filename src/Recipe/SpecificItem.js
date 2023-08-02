import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SpecificItem = ({ recipe }) => {
    const { title } = useParams()

    const finds = recipe.find(recipe => (recipe.recipe.label) === title)
    const img = finds.recipe.image
    const dishname = finds.recipe.label
    const arr = finds.recipe.ingredients
    const steps = finds.recipe.ingredientLines;


    return (
        <>
            <div className="container">
                <div>
                    <img src={img} className='image' alt="there is an image..." />
                </div>
                <div className="para">
                    <h5>Dish Name:</h5>
                    <p> {dishname}</p>
                    <h5>Ingredients: </h5>
                    {arr.map((inst, index) => {
                        return <span key={index}>{inst.food}, </span>
                    })}
                    <h5>Ingredients Line: </h5>
                    <ul>
                        {
                            steps.map((step, i) => {
                                return <li key={i}>{step}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SpecificItem