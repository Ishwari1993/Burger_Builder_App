import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state={
        ingredients:null,
        totalPrice: 0
    }

    componentWillMount(){
        
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {};
        let price = 0;

        // console.log("query", query)

        for (let param of query.entries()){
            if(param[0] === 'price'){
                 price = +param[1]
            }else{

                ingredients[param[0]] = +param[1];
            }


            // console.log("param", param)
            // console.log("query.entries", query.entries())
            // console.log(+param[1])
            
        }
        // console.log("ingredients " , ingredients)
        
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
        
    }

    checkoutCancelledHandler=()=>{
        this.props.history.goBack();
    }
    
    checkoutContinuedHandler=()=>{
        this.props.history.replace("/checkout/contact-data")
        
    }


    render() {
        return (
                 <React.Fragment>
                    <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    style={{width: '300px', margin: "auto"}}/>

                    <Route path={this.props.match.path + "/contact-data"} render={(props)=>(
                        <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />
                    )}/>
                </React.Fragment>
            
        )
    }
}

export default Checkout