import React from 'react'
import classess from "./Button.module.css"

const button = (props) => {
    return (
        
            <button className={[classess.Button, classess[props.btnType]].join(" ")}
            onClick={props.clicked} disabled={props.disabled}>{props.children}</button>
            

        
    )
}

export default button
