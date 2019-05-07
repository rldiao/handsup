import React, { Component } from "react";

import styles from "./signup.module.css";
import DoneeForm from "../../components/donee/DoneeForm";
import DonerForm from "../../components/doner/DonerForm";
import { Button } from "@material-ui/core";

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
        formComponent = <DonerForm switchForm={this.handleSwitch} />;
        break;
      case 2:
        formComponent = <DoneeForm switchForm={this.handleSwitch} />;
        break;
      default:
        throw new Error("Undefined form");
    }

    return <div className={styles.pageContainer}>{formComponent}</div>;
  }
}
