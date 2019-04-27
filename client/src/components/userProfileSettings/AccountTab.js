import React, { Component } from "react";

import styles from "./profileSettings.module.css";

const user = {
  email: "zach@gmail.com",
  password: "******"
};

export default class AccountTab extends Component {
  contructor() {}

  render() {
    return (
      <div className={styles.settingsContainer}>
        <h2>Account Details</h2>
        <div className={styles.formCell}>
          <label className={styles.subheading}>Email</label>
          <input
            placeholder={user.email}
            name="email"
            className={styles.input}
            disabled
          />
        </div>
        <div className={styles.formCell}>
          <label className={styles.subheading}>Password</label>
          <input
            placeholder={user.password}
            name="password"
            className={styles.input}
            disabled
          />
        </div>
      </div>
    );
  }
}
