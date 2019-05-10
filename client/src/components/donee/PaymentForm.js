import React, { Component, Fragment } from "react";
import styles from "./donee.module.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export class PaymentForm extends Component {
  render() {
    return (
      <Fragment>
        <h2>Payment Details</h2>
        <TextField label="Account Number" />
        <TextField label="BSB" />
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.back}>Back</Button>
          <Button variant="contained" color="primary" onClick={this.props.next}>
            Next
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default PaymentForm;
