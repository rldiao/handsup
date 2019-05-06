import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./donee.module.css";

export class FormUserDetails extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
      <Fragment>
        <h2>Account Details</h2>
        <TextField
          label="Email"
          value={values.email}
          onChange={handleChange("email")}
        />
        <TextField
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange("password")}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
        <Button variant="contained" color="primary" onClick={this.props.next}>
          Next
        </Button>
      </Fragment>
    );
  }
}

export default FormUserDetails;
