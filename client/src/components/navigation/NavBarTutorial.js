import React, { Component } from "react";

import logo from "../../assets/img/logo_slogan.png";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import styles from "./NavBarTutorial.module.css";
import CallToAction from "./CallToAction";

class NavBarTutorial extends Component {
  constructor() {
    super();
    // this.Auth = new AuthService();
    this.state = {
      loggedIn: false
    };
  }

  // componentWillMount() {
  //   this.setState({ loggedIn: this.Auth.loggedIn() });
  // }

  render() {
    let callToActionDiv;

    let loggedIn = 1;

    if (
      !loggedIn
      // User is logged in
    ) {
      callToActionDiv = <CallToAction />;
    }

    return (
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.spacer} />
          <div className={styles.navBarItems}>
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
          {callToActionDiv}
          <div className={styles.drawerToggleButton}>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}

// NavBarNew.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default NavBarTutorial;
