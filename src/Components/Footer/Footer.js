import React,{Component} from 'react'

class Footer extends Component{
    render(){
        const {footerMenu} = this.props;
        return(  
            <ul className="footer-container">
                {footerMenu.map((menuItem,index) => (<li>{menuItem.title}
                <ul>
                    {menuItem.subMenu &&  menuItem.subMenu.map((subMenus,index) => (<li>{subMenus.title}</li>))}
                </ul>
                </li>))}
            </ul>        
        );
    }
        
}
export default Footer 
