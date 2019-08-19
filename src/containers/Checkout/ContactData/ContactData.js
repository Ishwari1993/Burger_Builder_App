import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classess from './ContactData.module.css'
import axios from '../../../axios'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Form/Input/Input'

 class ContactData extends Component {

    state={
        orderForm:{
    
            name:{
                elementType: "input",
                elementConfig:{
                    type:"text",
                    placeholder:"yourName",
                },
                value: '',

                validation:{
                    isRequired: true
                },

                valid: false,
                touched: false,

            },
            email:{
                elementType: "input",
                elementConfig:{
                    type:"email",
                    placeholder:"yourEmail",
                },
                value: '',

                validation:{
                    isRequired: true
                },
                valid: false,
                touched: false,
            },
            street:{
                elementType: "input",
                elementConfig:{
                    type:"text",
                    placeholder:"Street",
                },
                value: '',

                validation:{
                    isRequired: true
                },

                valid: false,
                touched: false,
            },
            zipCode:{
                
                elementType: "input",
                elementConfig:{
                    type:"text",
                        placeholder:"Zip Code",
                    },
                value: '',
                validation:{
                    isRequired: true,
                    minLength: 5,
                    maxLength: 5,
                },
               

                valid: false,
                touched: false,

            },
            country:{
                elementType: "input",
                elementConfig:{
                    type:"text",
                    placeholder:"Country",
                },
                value: '',

                validation:{
                    isRequired: true
                },
                valid: false,
                touched: false,

            },
            
            delveryMethod:{
                elementType:"select",
                elementConfig:{
                    options:[
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
             
                value: 'fastest',
                valid: true,
                validation: {},
                

            },

        },
      
        spinnerLoading: false,
        formIsValid: false
    }

    checkValidity(value, rules){

        

            let isValid = true
            if(rules.isRequired){
                isValid = value.trim() !== '' && isValid;
            }
            if(rules.minLength){
                isValid = value.length >= rules.minLength && isValid
            }
            if(rules.maxLength){
                isValid = value.length <= rules.maxLength && isValid
            }
            return isValid
        
        


    }

    orderHandler=(event)=>{
        event.preventDefault()
        
       this.setState({
           spinnerLoading: true
       })
       const formData ={};
       for(let formkey in this.state.orderForm){
           formData[formkey] = this.state.orderForm[formkey].value

           
       }

        const order={
            ingredients:this.props.ingredients,
            totalPrice:this.props.price,
            customer:formData
            

        }

        axios.post('/Orders.json', order)
        .then(response=>{
            this.setState({
                spinnerLoading:false,
                
                
            })
            this.props.history.push('/')
        })
        .catch(error=>{
            this.setState({
                spinnerLoading: false,
                
            })
        })
    }

    inputFormHanlder=(event, inputIndentifier)=>{

        const updateOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElements = {
            ...updateOrderForm[inputIndentifier]

        }
        
        updatedFormElements.value = event.target.value
        updatedFormElements.valid = this.checkValidity(updatedFormElements.value,updatedFormElements.validation)
        updatedFormElements.touched = true
        updateOrderForm[inputIndentifier] = updatedFormElements
        let formIsValid = true;
        for(let inputIndentifier in updateOrderForm){
            formIsValid = updateOrderForm[inputIndentifier].valid && formIsValid
        }
        console.log(formIsValid)
        this.setState({
            orderForm:updateOrderForm,
            formIsValid: formIsValid

        })



    }


    render() {

        const formElementsArray = []

        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]

            });
        }

    

     
      
    

        let form = (
                <form onSubmit= {this.orderHandler}>
                    {/* <Input elementType="..." elementConfig= "..." value= "..."/> */}
                    {formElementsArray.map(formElements =>(
                            <Input key={formElements.id} 
                                elementType={formElements.config.elementType} 
                                elementConfig={formElements.config.elementConfig}
                                value={formElements.config.value}
                                invalid={!formElements.config.valid}
                                shouldValidated={formElements.config.validation}
                                touched= {formElements.config.touched}
                                changed={(event)=>this.inputFormHanlder(event, formElements.id)}
                            />)
                        )
                    }
                    <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
                    
                </form>

        )
        if(this.state.spinnerLoading){
            form = <Spinner/>
        }
        return (
            <div className={classess.ContactData} >
                <p >Enter Your Contact Data</p>
                {form}
                
            </div>
        )
    }
}
export default ContactData
