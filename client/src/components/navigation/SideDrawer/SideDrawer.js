import React, { Component } from "react";
import styles from "./SideDrawer.module.css";

const classNames = require("classnames");

const sideDrawer = props => {
  let drawerClasses = styles.sideDrawer;
  if (props.show) {
    drawerClasses = classNames(styles.open, styles.sideDrawer);
  }

  let accountActionButtons;

  let loggedIn = 1;

  if (
    loggedIn
    // User is logged in
  ) {
    accountActionButtons = (
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
    );
  } else {
    accountActionButtons = (
      <div className={classNames(styles.accountButtons)}>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav className={drawerClasses}>
      {accountActionButtons}
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
      }}
    </nav>
  );
};

export default sideDrawer;
