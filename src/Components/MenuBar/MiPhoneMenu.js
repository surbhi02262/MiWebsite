import React, { Component } from "react";
import logo from "./../../Images/miLogo.png";
import { miPhoneRightMenu } from "./../Constant";

class MiPhoneMenu extends Component {
  render() {
    return (
      <div className="menu-header-container">
        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>
        <ul className="mi-Phone-right-menu">
          {miPhoneRightMenu.map(menuItems => (
            <li>{menuItems.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MiPhoneMenu;
