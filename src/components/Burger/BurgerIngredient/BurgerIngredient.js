import React, {Component} from 'react'
import Classess from "./BurgerIngredient.module.css"
import PropTypes from "prop-types"

class BurgerIngredient extends Component {
    
    render(){

        let ingredient = null;

        switch(this.props.type){
            case("bread-top"):
                ingredient=(
                    <div className={Classess.BreadTop}>
                    <div className={Classess.Seeds1}></div>
                    <div className={Classess.Seeds2}></div>  
                    </div>
            );
            break;

            case("bread-bottom"):
                ingredient= <div className={Classess.BreadBottom}></div>;
                 break;
           
            case("meat"):
               ingredient=<div className={Classess.Meat}></div>;  
            break;
            case("salad"):
               ingredient=<div className={Classess.Salad}></div>;  
               break;    
            case("bacon"):
               ingredient=<div className={Classess.Bacon}></div>;  
               break;
            case("cheese"):
               ingredient=<div className={Classess.Cheese}></div>;  
               break;    


            default:
               ingredient=null  
        }
        return ingredient
    }
};

BurgerIngredient.propTypes ={
    type: PropTypes.string.isRequired
}

export default BurgerIngredient

