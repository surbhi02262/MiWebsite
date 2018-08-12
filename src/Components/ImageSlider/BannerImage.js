import React, { Component } from "react";
import bannerImage from "./../../Images/Banner1.jpg";

class BannerImage extends Component {
  render() {
    return (
      <div className="banner-image">
        <img src={bannerImage} alt="" />
      </div>
    );
  }
}
export default BannerImage;
