import React, { Component } from "react";
import { images, starProducts } from "./../Constant";

class AppImage extends Component {
  render() {
    return (
      <div>
        {this.props.brandName === "brand" && (
          <div className="brand">
            {images.map((image, i) => (
              <img src={image.url} alt="Image11" />
            ))}
          </div>
        )}
        {this.props.brandName === "starProducts" && (
          <div className="star-products-container">
            {starProducts.map((image, i) => (
              <img src={image.url} alt="Image98" />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AppImage;
