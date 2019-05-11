import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./profileSettings.module.css";

export default class PaymentForm extends Component {
  handlePaymentClick = () => {
    alert("Saved Card Details");
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <TextField
          label="Card Number"
          type="Card Number"
          name="Card Number"
          className={styles.input}
        />
        <TextField
          label="Cardholder Name"
          type="Cardholder Name"
          id="Cardholder Name"
          name="Cardholder Name"
          className={styles.input}
        />
        <TextField
          label="Expiration"
          type="Expiration"
          id="Expiration"
          placeholder="MM/YY"
          name="Expiration"
          className={styles.input}
        />
        <TextField
          label="Security Code"
          type="Security Code"
          id="Security Code"
          name="Security Code"
          className={styles.input}
        />
        <Button
          onClick={this.handlePaymentClick}
          color="primary"
          variant="contained"
          size="small"
        >
          Save
        </Button>
      </div>
    );
  }
}
