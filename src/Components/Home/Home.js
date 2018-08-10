import React,{Component} from 'react'
import Header from './../Header/Header'
import MiPhoneMenu from './../MenuBar/MiPhoneMenu'


class Home extends Component {
    render(){
        return(
<div>
    <Header/>
    <MiPhoneMenu/>
    </div>
        );
    }
}
export default Home