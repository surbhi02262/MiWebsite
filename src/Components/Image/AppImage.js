import React,{Component} from 'react'
import {Images} from './../Constant'
import {StarProducts} from './../Constant'



class AppImage extends Component{
    render(){
        return(
            <div>
                {this.props.Classname === 'brand' && <div className="brand">
                {Images.map((image,i) => 
                    <img src = {image.url} alt="Image11"  />)}
            </div>}
            {this.props.Classname === "StarProducts" &&
            <div className="starProductsContainer">
            {StarProducts.map((image,i) => 
                <img src = {image.url} alt="Image98"  />)}
        </div>}
        </div>
        );
    }
}

export default AppImage