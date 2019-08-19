import React, { Component } from 'react'
import Order from "../../components/Order/Order"
import axios from '../../axios'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
    state= {
        Orders: [],
        loading: true
    }


    componentDidMount(){
        axios.get("/Orders.json")
        .then(response=>{

            const fetchedOrders = [];
            for(let key in response.data){
                fetchedOrders.push({
                    ...response.data[key],
                    id: key
                    
                })
            }


            this.setState({
                loading: false,
                Orders: fetchedOrders
            })
        })
        .catch(error =>{
            this.setState({
                loading: false
            })
        })
    }



    render() {

        return (
            <div>
                {this.state.Orders.map(order=>(
                    <Order
                        key= {order.id}
                        ingredients={order.ingredients}
                        price= {+order.totalPrice}/>
                ))}
                
                
            </div>
        )
    }
}
export default withErrorHandler(Orders, axios)

