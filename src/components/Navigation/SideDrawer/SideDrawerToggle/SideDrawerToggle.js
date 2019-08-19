import React from 'react'
import classess from "./SideDrawerToggle.module.css"

const drawerToggle = (props) => {
    return (

        <div className={classess.DrawerToggle} onClick={props.clicked}>
            <div></div> 
            <div></div> 
            <div></div> 
        </div>
    )
}

export default drawerToggle
