import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Sidebar = (props) => {
  return (
    <div className="page_with_sidebar">
      <div className="sidebar">
        <div className="sidebar_item">
          <div className="sidebar_heading">ADMIN PANEL</div>
          <div className="menu_item_box">
            <li className="menu_item">Home</li>
            <li className="menu_item">NavBar</li>
            <li className="menu_item">Gallery</li>
            <li className="menu_item">Job Category</li>
            <li className="menu_item">Job Available</li>
            <li className="menu_item">Global</li>
          </div>
        </div>
      </div>
      <div className="sidebar_children">{props.children}</div>
    </div>
  );
};

export default Sidebar;
