import React, { Component } from 'react'
import Modal from "../../components/UI/Modal/Modal"
import Auxiliary from "../Auxiliary"


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

        state={
            error: null
        }


        componentWillMount(){

            this.reqInterceptors= axios.interceptors.request.use(req=>{
                this.setState({
                    error: null
                })
                return req
            })

            this.resInterceptores= axios.interceptors.response.use(res=>res, error=>{
                console.log("error are as follows   ", error)
                console.log("error as config  ", error.config)
                console.log("error as code  ", error.code)
                console.log("error as request  ", error.request)
                console.log("error as response ", error.response)




                this.setState({
                    error: error
                })

            })
        }


        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptores);


        }

        confirmedHandler=()=>{

            this.setState({
                error: null
            })
        }

        errorHandlerClosed=()=>{
            this.setState({
                error: null
            })
        }

        render(){
            return(
                <Auxiliary>
                    <Modal show={this.state.error }
                    modalClosed={this.confirmedHandler}>
                        <div onClick={this.errorHandlerClosed}>
                        {this.state.error ? this.state.error.message: null }

                        </div>


                    </Modal>

                    <WrappedComponent {...this.props}/>
                    
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler
  

