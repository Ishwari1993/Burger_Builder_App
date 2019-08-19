import React from 'react'
import classess from './Order.module.css'

const Order = (props) => {

    const ingredients = [];
    for(let ingredientsName in props.ingredients){
        ingredients.push({
            name: ingredientsName,
            amount: props.ingredients[ingredientsName]

        })
    }
    const ingredientsOutput =  ingredients.map(igkey => {
        return <span key={igkey.name}
                style={
                    {textTransform: "capitalize",
                    display: 'inlineblock',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'}}>
                    {igkey.name} ({igkey.amount})</span> })


    return (
        <div className={classess.Order}>
        
            <h4>Ingredients: {ingredientsOutput}</h4>
            <span><strong>Price: Rs {props.price}</strong></span>


            
        </div>
    )
}
export default Order

