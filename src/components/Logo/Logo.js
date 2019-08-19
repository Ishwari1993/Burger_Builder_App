import React from 'react'
import classess from "./Logo.module.css"
import BurgerLogo from "../../assets/Images/burger-logo.png"

const logo = () =>(

    <div className={classess.Logo}>
        <img src = {BurgerLogo} alt="Burger"/>
    </div>

)

export default logo
