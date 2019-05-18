import React from "react";
import { connect } from "react-redux";
import styles from "./SideDrawer.module.css";
import { stateConstants } from "../../../constants/stateConstants";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/userActions";
import { userTypeConstants } from "../../../constants";

const classNames = require("classnames");

const sideDrawer = props => {
  let drawerClasses = styles.sideDrawer;
  if (props.show) {
    drawerClasses = classNames(styles.open, styles.sideDrawer);
  }

  let discoverTab;
  if (props.userType === userTypeConstants.DONOR) {
    discoverTab = (
      <li>
        <Link to="/discover">Discover</Link>
      </li>
    );
  }

  let accountActionButtons;
  let loggedIn = props.authState === stateConstants.AUTH;

  if (loggedIn) {
    accountActionButtons = (
      <div className={classNames(styles.accountButtons)}>
        <ul>
          <li>
            <Link to="/userProfile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <div onClick={props.logout}>Log Out</div>
          </li>
        </ul>
      </div>
    );
  } else {
    accountActionButtons = (
      <div className={classNames(styles.accountButtons)}>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
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
            <a href="/about">About Us</a>
          </li>
          {discoverTab}
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      }}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    authState: state.auth.state,
    userType: state.auth.userType
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(sideDrawer);
