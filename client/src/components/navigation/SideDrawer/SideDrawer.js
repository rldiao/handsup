import React, { Component } from "react";
import styles from "./SideDrawer.module.css";

const classNames = require("classnames");

const sideDrawer = props => {
  let drawerClasses = styles.sideDrawer;
  if (props.show) {
    drawerClasses = classNames(styles.open, styles.sideDrawer);
  }

  // var w = Math.max(
  //   document.documentElement.clientWidth,
  //   window.innerWidth || 0
  // );

  // let navBarButtons;
  // if (w <= 800) {
  //   navBarButtons = (
  //     <ul>
  //       <li>
  //         <a href="/">About Us</a>
  //       </li>
  //       <li>
  //         <a href="/">Discover</a>
  //       </li>
  //       <li>
  //         <a href="/">Contact Us</a>
  //       </li>
  //     </ul>
  //   );
  // }

  return (
    <nav className={drawerClasses}>
      <div className={classNames(styles.accountButtons)}>
        {/* {navBarButtons} */}
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
      </div>
      <div className={classNames(styles.navBarButtons)}>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Discover</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default sideDrawer;
