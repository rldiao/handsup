import React, { Component } from "react";
import AuthService from "../../services/AuthService";

import styles from "./profileSettings.module.css";

export default class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: AuthService.getProfile().email
    };
  }

  render() {
    return (
      <div>
        <div className={styles.formCell}>
          <label
            className={styles.subheading}
            style={{ display: "inline-block" }}
          >
            Email:
          </label>
          {" " + this.state.email}
        </div>
      </div>
    );
  }
}
