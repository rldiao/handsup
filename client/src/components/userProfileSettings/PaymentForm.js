import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./profileSettings.module.css";
import { styles as custom } from "./userProfileSettings.style";

export default class PaymentForm extends Component {
  handlePaymentClick = () => {
    alert("Saved Card Details");
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <label htmlFor="Card Number" className={styles.subheading}>
          Card Number
        </label>
        <input
          type="Card Number"
          id="Card Number"
          name="Card Number"
          className={styles.input}
        />
        <div className={styles.formCell}>
          <label htmlFor="Cardholder Name" className={styles.subheading}>
            Cardholder Name
          </label>
          <input
            type="Cardholder Name"
            id="Cardholder Name"
            name="Cardholder Name"
            className={styles.input}
          />
        </div>
        <div className={styles.formCell}>
          <label htmlFor="Expiration" className={styles.subheading}>
            Expiration
          </label>
          <input
            type="Expiration"
            id="Expiration"
            placeholder="MM/YY"
            name="Expiration"
            className={styles.input}
          />
        </div>
        <div className={styles.formCell}>
          <label htmlFor="Security Code" className={styles.subheading}>
            Security Code
          </label>
          <input
            type="Security Code"
            id="Security Code"
            name="Security Code"
            className={styles.input}
          />
        </div>
        <div className={styles.formCell}>
          <Button onClick={this.handlePaymentClick} style={custom.submitBtn}>
            Save
          </Button>
        </div>
      </div>
    );
  }
}
