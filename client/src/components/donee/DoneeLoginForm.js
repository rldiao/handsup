import React, { Component } from "react";

import styles from "./donee.module.css";
import { TextField, Button } from "@material-ui/core";

export class DoneeLoginForm extends Component {
  handleLogin = () => {
    // TODO
  };

  render() {
    return (
      <div className={styles.grid}>
        <h1>Donee Login Form</h1>
        <TextField variant="outlined" label="Email" />
        <TextField variant="outlined" label="Password" type="password" />
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.switchForm}>I'm a doner</Button>
          <Button
            onClick={() => {
              alert("Login... Isn't added yet");
            }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default DoneeLoginForm;
