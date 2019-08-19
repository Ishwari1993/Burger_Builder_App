import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
import classess from "./BuildControls.module.css"

const BuildControls = (props) => {

    const controls=[
        {label: "Salad", type:"salad"},
        {label: "Meat", type:"meat"},
        {label: "Bacon", type:"bacon"},
        {label: "Cheese", type:"cheese"}


    ];


    return (
        <div className={classess.BuildControls}>

        <p><strong>CurrentPrice: Rs=  {props.price}</strong></p>

            {controls.map(cntrl=> (
                <BuildControl key={cntrl.label} label={cntrl.label}
                ingredientsMore={()=>{props.ingredientsAdded(cntrl.type)}}
                ingredientsLess={()=>{props.ingredientsRemove(cntrl.type)}}
                disabled={props.disabled[cntrl.type]}/>
            ))}

            <button className={classess.OrderButton} disabled={!props.purchasable} onClick={props.orderActivated}>Order Now</button>
            
        </div>
    )
}

export default BuildControls


