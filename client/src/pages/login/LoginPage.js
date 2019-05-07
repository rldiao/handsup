import React, { Component } from "react";
import DonerLoginForm from "../../components/doner/DonerLoginForm";
import DoneeLoginForm from "../../components/donee/DoneeLoginForm";

import styles from "./loginPage.module.css";

export class LoginPage extends Component {
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
        formComponent = <DonerLoginForm switchForm={this.handleSwitch} />;
        break;
      case 2:
        formComponent = <DoneeLoginForm switchForm={this.handleSwitch} />;
        break;
      default:
        throw new Error("Undefined form");
    }

    return <div className={styles.pageContainer}>{formComponent}</div>;
  }
}

export default LoginPage;
