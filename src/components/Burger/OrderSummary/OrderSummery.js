import React from 'react'
import Button from "../../UI/Button/Button"

const orderSummery = (props) => {

    const Summery = Object.keys(props.ingredients).map((igkey,i)=>{
        return  <li key={igkey + i}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}

                </li>    
    })

    return(
        <div>
           <h3>Order Summary:</h3>
           <p>Your Delicious Burger is ready with below ingredients:</p>
           <ul>{Summery}</ul>
           <span style={{textTransform: 'capitalize'}}>Total Price</span>:Rs  {props.price.toFixed(2)}
                <p>Continue to Checkout: ?</p>
                <Button btnType="Success" clicked={props.continuePurchasing}>Continue</Button>
                <Button btnType= "Danger" clicked={props.cancelPurchasing}>Cancel</Button>

           
        </div>
       
    )    
}

export default orderSummery
