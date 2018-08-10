import React,{Component} from 'react'
import {leftMenu} from './../Constant'
import {rightMenu} from './../Constant'

class Header extends Component{
    render(){
    return(
        
<div className="head-container">
<ul className="left-menu">
{leftMenu.map((menus) => 
<li className="list-item">{menus.title}</li> )}
</ul>
<ul className="right-menu">
{rightMenu.map((menus) => <li>{menus.title}</li>)}
</ul>
</div>

    );
}}

export default Header