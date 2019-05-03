import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../../assets/img/logo_slogan.png";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import styles from "./NavBarTutorial.module.css";
import CallToAction from "./CallToAction";
import { stateConstants } from "../../constants/stateConstants";
import { Link } from "react-router-dom";

class NavBarTutorial extends Component {
  render() {
    let callToActionDiv;
    let loggedIn = this.props.authState === stateConstants.AUTH;

    if (!loggedIn) {
      callToActionDiv = <CallToAction />;
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
              <li>
                <Link to="/discover" className={styles.navBarItem}>
                  Discover
                </Link>
              </li>
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
    authState: state.auth.state
  };
};

export default connect(mapStateToProps)(NavBarTutorial);
