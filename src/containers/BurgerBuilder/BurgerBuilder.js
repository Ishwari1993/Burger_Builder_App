import React, { Component } from 'react'
import Aux from "../../hoc/Auxiliary"
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummery"
import Spinner from "../../components/UI/Spinner/Spinner"
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



const ingredientsPrice ={
    cheese: 30,
    salad: 20,
    meat: 50,
    bacon: 30
}


class BurgerBuilder extends Component {

    state={
        ingredients:null,   
        totalPrice: 40,
        purchasable: false,
        purchasing: false,
        spinnerLoading: false,
        error:null
    };


    componentDidMount(){
        axios.get("https://burger-app-new-374a7.firebaseio.com/ingredients.json")
        .then(response=>{
            this.setState({
                ingredients: response.data
            })
        }).catch(error=>{
            this.setState({
                error:error
            })
        })
    }


    updatePurchaseState =(ingredients)=>{
        const sum = Object.keys(ingredients).map(igkey=>{
            return ingredients[igkey]
        }).reduce((sum, el)=>{
            return sum + el;

        },0)

        // console.log(sum)

        this.setState({
            purchasable: sum > 0
        })



    }

    ingredientsAddedHandler = (type)=>{

        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount +1

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount

        const oldPrice = this.state.totalPrice
        const addedPrice = ingredientsPrice[type]

        const updatedPrice = oldPrice + addedPrice

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })
        this.updatePurchaseState(updatedIngredients)

        
    }

    ingredientsRemoveHandler =(type)=>{

        const oldCount = this.state.ingredients[type]
        if(oldCount<1){
            return
        }
        const updateCount = oldCount - 1

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount

        const oldPrice = this.state.totalPrice
        const substractPrice = ingredientsPrice[type]

        const updatedPrice = oldPrice - substractPrice



        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        })

        this.updatePurchaseState(updatedIngredients)
    }

    purchasingHandler=()=>{
        this.setState({
            purchasing: true
        })
    }

    purchasingCancelHandler=()=>{
        this.setState({
            purchasing: false
        })
    }

   

    purchasingContinueHandler=()=>{



    const queryParams = []
    queryParams.push("price=" + this.state.totalPrice)
    for(let i in this.state.ingredients){
        queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]))
    }

    const queryString = queryParams.join("&")

    this.props.history.push({
        pathname:"/checkout",
        search: "?" + queryString
    })


    }



    render() {
        const disableInfo ={
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0;
        }
        // console.log(disableInfo)

        // // Modal is rendered if purchasing is true ..we can do it conditionally outside of return:
        // let modal = null
        // if(this.state.purchasing){
        //     modal = <Modal>
        //     <OrderSummary ingredients={this.state.ingredients}/>
        //     </Modal>

        // }

        let orderSummary = null
        let burger= this.state.error ? <p>something is wrong in getting ingredients
                                        ie axios.get method generating error</p> : <Spinner/>

        if(this.state.ingredients){

            burger=(
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                    ingredientsAdded ={this.ingredientsAddedHandler}
                    ingredientsRemove={this.ingredientsRemoveHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    orderActivated={this.purchasingHandler}/>

                </Aux>

            )
            orderSummary=(
                <OrderSummary ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                cancelPurchasing={this.purchasingCancelHandler}
                continuePurchasing={this.purchasingContinueHandler}/>

            )
            if(this.state.spinnerLoading){
                orderSummary = <Spinner/>
            }

        }




        return (
            <Aux>
                {/* {modal} */}
                <Modal show = {this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
               {orderSummary}
                </Modal>

                {burger}
               
                
               


            </Aux>
           
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);
