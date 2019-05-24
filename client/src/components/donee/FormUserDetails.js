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
          helperText={values.formErrors.email}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange("password")}
          helperText={values.formErrors.password}
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
          helperText={values.formErrors.confirmPassword}
          required
        />
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.switchForm}>I'm donating</Button>
          <Button variant="contained" color="primary" onClick={this.props.next}>
            Next
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default FormUserDetails;
