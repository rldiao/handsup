import React, { Component } from "react";
import styles from "./CallToAction.module.css";
import { Link } from "react-router-dom";

class CallToAction extends Component {
  render() {
    return (
      <div className={styles.callToActionLoggedOut}>
        <ul>
          <li>
            <Link to="/login" className={styles.callToActionLogInButton}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className={styles.callToActionSignUpButton}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CallToAction;
