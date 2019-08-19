import React from 'react'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import classess from "./SideDrawer.module.css"
import Backdrop from "../../../components/UI/Backdrop/Backdrop"
import Auxiliary from "../../../hoc/Auxiliary"

const sideDrawer = (props) => {
    let attachedClassess = [classess.SideDrawer, classess.Close]
    if(props.open){
        attachedClassess = [classess.SideDrawer, classess.Open]
    }


    return (
        <Auxiliary >

            <Backdrop show={props.open} clicked={props.closed}/>
            <div onClick={props.closed}>

            <div  className={attachedClassess.join(" ")}>

                <div className={classess.Logo}>
                    <Logo />
                </div>

                
    
                <nav>
                    <NavigationItems/>
                </nav>

                <button onClick={props.closed} className={[classess.Button, classess.Danger].join(" ")}> Closed</button>

            </div>
            </div>

        </Auxiliary>
    )
}

export default sideDrawer;
