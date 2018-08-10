import React,{Component} from 'react'
import Logo from './../../Images/miLogo.png'
import {miPhoneRightMenu} from './../Constant'

class MiPhoneMenu extends Component{
    render(){
        return(
            <div className="menuHeaderContainer">
            <div className="imagecontainer">
                <img src={Logo} alt="logo"/>
            </div>
            <ul className="miPhonerightmenu">
            {miPhoneRightMenu.map((menuitems) => <li>{menuitems.title}</li>)}
            </ul>
            </div>
        );
    }
}

export default MiPhoneMenu