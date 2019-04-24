import React, { Component } from "react";

import SignInForm from "../../components/auth/SignInForm";
import styles from "./formPage.module.css";

export default class LoginPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <SignInForm />
        </div>
      </div>
    );
  }
}
