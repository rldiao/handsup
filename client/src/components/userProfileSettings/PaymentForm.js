import React, { Component } from "react";
import styles from "./profileSettings.module.css";

export default class PaymentForm extends Component {
  render() {
    return (
      <div className={styles.settingsContainer}>
        <h2 className={styles.heading}>Payment Options</h2>
        <div className={styles.form}>
          <label htmlFor="Card Number" className={styles.subheading}>
            Card Number:
          </label>
          <input
            type="Card Number"
            id="Card Number"
            placeholder="Card Number"
            name="Card Number"
          />
          <label htmlFor="Cardholder Name" className={styles.subheading}>
            Cardholder Name:
          </label>
          <input
            type="Cardholder Name"
            id="Cardholder Name"
            placeholder="Cardholder Name"
            name="Cardholder Name"
          />
          <label htmlFor="Expiration" className={styles.subheading}>
            Expiration:
          </label>
          <input
            type="Expiration"
            id="Expiration"
            placeholder="MM/YY"
            name="Expiration"
          />
          <label htmlFor="Security Code" className={styles.subheading}>
            Security Code:
          </label>
          <input
            type="Security Code"
            id="Security Code"
            placeholder="CVC"
            name="Security Code"
          />
          <button type="submit">Save</button>
        </div>
      </div>
    );
  }
}
