import React,{Component} from 'react'
import Header from './../Header/Header'
import MiPhoneMenu from './../MenuBar/MiPhoneMenu'
import BannerImage from './../ImageSlider/BannerImage'
import AppImage from './../Image/AppImage'
 



class Home extends Component {
    render(){
        return(
<div>
    <Header/>
    <MiPhoneMenu/>
    <BannerImage/>
    <AppImage Classname="brand"/>
    <h3>Star Products</h3>
    <AppImage Classname ="StarProducts"/>
    </div>
        );
    }
}
export default Home