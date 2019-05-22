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
      errors: {
        oldPw: ""
      }
    };
  }

  handlePasswordClick = () => {
    const profile = AuthService.getProfile();

    // TODO: make backend route to validate old pw
    Axios.post("/user/validate_password", {
      user: {
        email: profile.email,
        password: this.state.oldPw
      }
    })
      .then(res => {
        if (res.status !== 200) {
          throw Error(res.status);
        }
        Axios.put("/user/change_password/" + profile.email, {
          password: this.state.newPw
        }).then(() => {
          this.setState({
            oldPw: "",
            newPw: "",
            confirmPw: "",
            errors: { oldPw: "" }
          });
        });
      })
      .catch(err => {
        this.setState({ errors: { oldPw: "Incorrect password" } });
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
          label="Old Password"
          name="oldPw"
          type="password"
          fullWidth
          value={this.state.oldPw}
          onChange={this.handleChange}
          error={this.state.errors.oldPw}
          helperText={this.state.errors.oldPw}
        />
        <TextField
          label="New Password"
          name="newPw"
          type="password"
          fullWidth
          value={this.state.newPw}
          onChange={this.handleChange}
        />
        <TextField
          label="Confirm Password"
          name="confirmPw"
          type="password"
          fullWidth
          value={this.state.confirmPw}
          onChange={this.handleChange}
        />
        <Button
          onClick={this.handlePasswordClick}
          color="primary"
          variant="contained"
        >
          Change Password
        </Button>
      </div>
    );
  }
}
