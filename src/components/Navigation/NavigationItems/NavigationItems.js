import React from 'react'
import NavigationItem from "./NavigationItem/NavigationItem"
import classess from "./NavigationItems.module.css"




const navigationItems = () => (
    <ul className={classess.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link= "/orders">Orders</NavigationItem>


    </ul>
)
  

export default navigationItems
