import React, { Component } from "react";
import styles from "./SideDrawer.module.css";

const classNames = require("classnames");

const sideDrawer = props => {
  let drawerClasses = styles.sideDrawer;
  if (props.show) {
    drawerClasses = classNames(styles.open, styles.sideDrawer);
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Log Out</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
