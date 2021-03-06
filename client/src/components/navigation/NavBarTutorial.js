import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo_slogan.png";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import styles from "./NavBarTutorial.module.css";
import CallToAction from "./CallToAction";
import { stateConstants, userTypeConstants } from "../../constants/";
import { history } from "../../helper/history";

class NavBarTutorial extends Component {
  handleImageClick = () => {
    history.push("/");
  };

  render() {
    let callToActionDiv;
    let discoverTab;
    let loggedIn = this.props.authState === stateConstants.AUTH;

    if (!loggedIn) {
      callToActionDiv = <CallToAction />;
    }
    if (this.props.userType === userTypeConstants.DONOR) {
      discoverTab = (
        <li>
          <Link to="/discover" className={styles.navBarItem}>
            Discover
          </Link>
        </li>
      );
    }

    return (
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <img
            onClick={this.handleImageClick}
            src={logo}
            alt="Logo"
            className={styles.logo}
          />
          <div className={styles.spacer} />
          <div className={styles.navBarItems}>
            <ul>
              <li>
                <Link to="/about" className={styles.navBarItem}>
                  About Us
                </Link>
              </li>
              {discoverTab}
              <li>
                <Link to="/contact" className={styles.navBarItem}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {callToActionDiv}
          <div className={styles.drawerToggleButton}>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: state.auth.state,
    userType: state.auth.userType
  };
};

export default connect(mapStateToProps)(NavBarTutorial);
