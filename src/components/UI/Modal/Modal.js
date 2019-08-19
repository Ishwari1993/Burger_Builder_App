import React,{Component} from 'react'
import classess from "./Modal.module.css"
import Aux from "../../../hoc/Auxiliary"
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

  // this is use to skip the render when props of show ie modal is not change
  // which increase the performance 

  shouldComponentUpdate(nextProps, nextState){        
    return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
  }


  render(){
    
    return(

      <Aux>
        <Backdrop show = {this.props.show} clicked={this.props.modalClosed}/>
      <div className={classess.Modal}
       style={{transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
       opacity: this.props.show ? '1' : '0'}}>
          {this.props.children}
      </div>
      
    </Aux>

    )
  }

}

export default Modal
