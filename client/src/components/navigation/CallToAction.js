import React, { Component } from "react";
import styles from "./CallToAction.module.css";

class CallToAction extends Component {
  render() {
    return (
      <div className={styles.callToActionLoggedOut}>
        <ul>
          <li>
            <a href="/" className={styles.callToActionLogInButton}>
              Login
            </a>
          </li>
          <li>
            <a href="/" className={styles.callToActionSignUpButton}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CallToAction;
