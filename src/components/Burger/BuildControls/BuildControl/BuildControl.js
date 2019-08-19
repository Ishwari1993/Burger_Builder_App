import React from 'react'
import classess from "./BuildControl.module.css"

const BuildControl = (props) => {
    return (
        <div className={classess.BuildControl}>
            <div className={classess.Label}>{props.label}</div>
            <button className={classess.Less} onClick={props.ingredientsLess} disabled={props.disabled}> Less</button>
            <button className={classess.More} onClick={props.ingredientsMore}> More</button>

            
        </div>
    )
}

export default BuildControl
