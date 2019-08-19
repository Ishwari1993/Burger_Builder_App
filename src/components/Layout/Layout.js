import React, {Component} from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Classess from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"



class Layout extends Component{

    state={
        showSideDrawer: false
    }

    closedSideDrawerHandler=()=>{
        this.setState({
            showSideDrawer:false
        })
    }

    toggleDrawerHandler=()=>{
        this.setState((prevstate)=>{
            return{
                showSideDrawer: !prevstate.showSideDrawer
            }
        })
    }


    render(){
        return(
            <Auxiliary>
                <Toolbar drawerToggle={this.toggleDrawerHandler}/>
                <SideDrawer  open={this.state.showSideDrawer} closed={this.closedSideDrawerHandler}/>
                
                <main className={Classess.Content}>
                    {this.props.children}
                </main>

            </Auxiliary>

        )
            
    }
}
    


export default Layout;