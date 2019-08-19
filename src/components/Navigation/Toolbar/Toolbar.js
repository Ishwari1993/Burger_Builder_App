import React from 'react'
import Logo from "../../Logo/Logo"
import classess from './Toolbar.module.css'
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle"



const toolbar = (props) => (
    

    <header className={classess.Toolbar}>
        <DrawerToggle clicked={props.drawerToggle}/>
            <div className={classess.Logo}>
                <Logo/>
            </div>
        <nav className={classess.DesktopOnly}><NavigationItems/></nav>
    </header>

)
    


export default toolbar


