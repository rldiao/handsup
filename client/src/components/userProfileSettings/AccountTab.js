import React, { Component } from "react";

import styles from "./setting.module.css";

const user = {
  email: "zach@gmail.com",
  password: "******"
};

export default class AccountTab extends Component {
  contructor() {}

  render() {
    return (
      <div className={styles.accountContainer}>
        <h3>Email</h3>
        <input
          placeholder={user.email}
          name="email"
          className={styles.input}
          disabled
        />
        <h3>Password</h3>
        <input
          placeholder={user.password}
          name="password"
          className={styles.input}
          disabled
        />
      </div>
    );
  }
}
