import React, { Component } from "react";
import LoginForm from "../../components/auth/LoginForm";

import styles from "./loginPage.module.css";

export class LoginPage extends Component {
  render() {
    return (
      <div className={styles.pageContainer}>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
