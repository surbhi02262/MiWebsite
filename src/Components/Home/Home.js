import React, { Component } from "react";
import Header from "./../Header/Header";
import MiPhoneMenu from "./../MenuBar/MiPhoneMenu";
import BannerImage from "./../ImageSlider/BannerImage";
import AppImage from "./../Image/AppImage";
import Footer from './../Footer/Footer'
import {footerMenus} from './../Constant'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <MiPhoneMenu />
        <BannerImage />
        <AppImage brandName="brand" />
        <h3>Star Products</h3>
        <AppImage brandName="starProducts" />
        <Footer footerMenu={footerMenus}/>
      </div>
    );
  }
}
export default Home;
