import React, { Component } from "react";
import { MenuList } from "./../Constant";

class MenuData extends Component {
  constructor() {
    super();
    this.state = {
      menus: MenuList
    };
  }
  render() {
    const { menus } = this.state;
    return (
      <div className="menu-bar">
        {Object.keys(menus)}
        {console.log("menus" + JSON.stringify(menus))}
      </div>
    );
  }
}
export default MenuData;
