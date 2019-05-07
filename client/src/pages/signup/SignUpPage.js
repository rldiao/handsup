import React, { Component } from "react";

import styles from "./signup.module.css";
import DoneeSignupForm from "../../components/donee/DoneeSignupForm";
import DonerSignupForm from "../../components/doner/DonerSignupForm";

export default class SignUpPage extends Component {
  state = {
    form: 1
  };

  handleSwitch = e => {
    e.preventDefault();
    let { form } = this.state;
    if (form === 1) {
      this.setState({ form: form + 1 });
    } else {
      this.setState({ form: form - 1 });
    }
  };

  render() {
    let formComponent;
    const { form } = this.state;

    switch (form) {
      case 1:
        formComponent = <DonerSignupForm switchForm={this.handleSwitch} />;
        break;
      case 2:
        formComponent = <DoneeSignupForm switchForm={this.handleSwitch} />;
        break;
      default:
        throw new Error("Undefined form");
    }

    return <div className={styles.pageContainer}>{formComponent}</div>;
  }
}
