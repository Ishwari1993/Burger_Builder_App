import React from 'react'
import Classess from "./Burger.module.css"
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_, i)=>{
            return <BurgerIngredient key={igkey + i} type={igkey}/>
        })
    }).reduce((prevArray, nextElement)=>{
        return prevArray.concat(nextElement)

    }, [])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>please add some ingredients</p>
    }
    

    return (
        <div className={Classess.Burger}>

            

            <BurgerIngredient type="bread-top"/>

            {transformedIngredients}

            <BurgerIngredient type="bread-bottom"/>
            
        </div>
    )
}

export default burger
