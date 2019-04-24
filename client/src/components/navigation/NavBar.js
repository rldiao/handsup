import React, { Component } from "react";
import AuthService from "../auth/AuthService";

import styles from "./NavBar.module.css";
import UnauthedNavItems from "./UnauthedNavItems";
import AuthedNavItems from "./AuthedNavItems";

export default class NavBar extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    this.setState({ loggedIn: this.Auth.loggedIn() });
  }

  render() {
    let navButtons;
    // console.log(this.state.loggedIn)
    if (this.state.loggedIn) {
      navButtons = <AuthedNavItems />;
    } else {
      navButtons = <UnauthedNavItems />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.navItems}>
          <div className={styles.logo}>
            <div>THE LOGO</div>
          </div>
          {navButtons}
        </div>
      </div>
    );
  }
}
