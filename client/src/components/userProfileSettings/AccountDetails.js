import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Axios from "axios";
import AuthService from "../../services/AuthService";

import styles from "./profileSettings.module.css";
import { styles as custom } from "./userProfileSettings.style";

const user = {
  email: "zach@gmail.com",
  password: "******"
};

// const userEmail = AuthService.getProfile().email;

export default class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: AuthService.getProfile().email
    };
  }

  render() {
    return (
      <div className={styles.settingsContainer}>
        <div className={styles.formCell}>
          <label className={styles.subheading}>Email:</label>
          <div className={styles.content}>{this.state.email}</div>
          {/* <input
            placeholder={this.state.email}
            name="email"
            className={styles.input}
            disabled
          /> */}
        </div>
      </div>
    );
  }
}
