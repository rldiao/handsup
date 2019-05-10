import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";

import styles from "./profileSettings.module.css";
import AuthService from "../../services/AuthService";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPw: "",
      newPw: "",
      confirmPw: "",
      user: null
    };
  }

  handlePasswordClick = () => {
    const profile = AuthService.getProfile();

    // TODO: make backend route to validate old pw

    Axios.put("/user/change_password/" + profile.email, {
      password: this.state.newPw
    })
      .then(() => {
        this.setState({ oldPw: "", newPw: "", confirmPw: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <TextField
          label="Current Password"
          name="oldPw"
          type="password"
          fullWidth
          value={this.state.oldPw}
          className={styles.input}
          onChange={this.handleChange}
        />
        <TextField
          label="New Password"
          name="newPw"
          type="password"
          fullWidth
          value={this.state.newPw}
          className={styles.input}
          onChange={this.handleChange}
        />
        <TextField
          label="Confirm Password"
          name="confirmPw"
          type="password"
          fullWidth
          value={this.state.confirmPw}
          className={styles.input}
          onChange={this.handleChange}
        />
        <Button
          onClick={this.handlePasswordClick}
          color="primary"
          variant="contained"
          size="small"
        >
          Change Password
        </Button>
      </div>
    );
  }
}
