import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import styles from "./profileSettings.module.css";
import { styles as custom } from "./userProfileSettings.style";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPw: "",
      newPw: "",
      confirmPw: ""
    };
  }

  handlePasswordClick = () => {
    alert("Saved Password");
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <label className={styles.subheading}>Old Password</label>
        <input
          name="oldPw"
          className={styles.input}
          onChange={this.handleChange}
        />
        <div className={styles.formCell}>
          <label className={styles.subheading}>New Password</label>
          <input
            name="newPw"
            className={styles.input}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.formCell}>
          <label className={styles.subheading}>Confirm Password</label>
          <input
            name="confirmPw"
            className={styles.input}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.formCell}>
          <Button onClick={this.handlePasswordClick} style={custom.submitBtn}>
            Change Password
          </Button>
        </div>
      </div>
    );
  }
}
