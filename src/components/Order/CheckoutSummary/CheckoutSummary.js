import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classess from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classess.CheckoutSummary}>
            <h1>your Burger is Delecious !</h1>
            <div style={{width:"100%", margin:"auto", textAlign: "center"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Success" clicked ={props.checkoutContinued}>Continue</Button>
            <Button btnType="Danger" clicked ={props.checkoutCancelled}> Cancel</Button>
            
        </div>
    )
}

export default checkoutSummary
