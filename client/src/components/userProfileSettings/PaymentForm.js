import React, { Component } from "react";
import styles from "./profileSettings.module.css";

export default class PaymentForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.paymentContainer}>
        <h2>Payment Options</h2>
        <div className={styles.form}>
          <label htmlFor="Card number">Card number:</label>
          <input
            type="Card number"
            id="Card number"
            placeholder="Card number"
            name="Card number"
          />
          <label htmlFor="Cardholder name">Cardholder name:</label>
          <input
            type="Cardholder Name"
            id="Cardholder Name"
            placeholder="Cardholder Name"
            name="Cardholder Name"
          />
          <label htmlFor="Expiration">Expiration:</label>
          <input
            type="Expiration"
            id="Expiration"
            placeholder="MM/YY"
            name="Expiration"
          />
          <label htmlFor="Security Code">Security Code:</label>
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
