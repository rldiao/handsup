import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import AccountDetails from "./AccountDetails";
import ChangePassword from "./ChangePassword";
import PaymentForm from "./PaymentForm";

import styles from "./profileSettings.module.css";

export default class userProfileSettings extends Component {
  constructor() {
    super();

    this.state = {
      hidePassword: true,
      hidePayment: true
    };
  }

  handlePasswordBtn = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  handlePaymentBtn = () => {
    this.setState({ hidePayment: !this.state.hidePayment });
  };

  render() {
    let passwordComponent, paymentComponent;
    if (!this.state.hidePassword) {
      passwordComponent = <ChangePassword />;
    }

    if (!this.state.hidePayment) {
      paymentComponent = <PaymentForm />;
    }

    return (
      <Fragment>
        <div className={styles.settingTitle}>Settings</div>
        <AccountDetails />
        <div className={styles.settingsContainer}>
          <div onClick={this.handlePasswordBtn} className={styles.dropDownBtn}>
            Password
          </div>
          {passwordComponent}
          <div onClick={this.handlePaymentBtn} className={styles.dropDownBtn}>
            Payment
          </div>
          {paymentComponent}
        </div>
      </Fragment>
    );
  }
}
