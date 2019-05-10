import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import styles from "./donee.module.css";
import { TextField, Button } from "@material-ui/core";
import AuthService from "../../services/AuthService";
import { userTypeConstants } from "../../constants";
import { history } from "../../helper/history";

export class DoneeLoginForm extends Component {
  state = {
    email: "",
    password: "",
    redirect: false
  };

  componentWillMount = () => {
    if (AuthService.loggedIn()) {
      this.setState({ redirect: true });
    }
  };

  handleLogin = async () => {
    try {
      await AuthService.login(
        this.state.email,
        this.state.password,
        userTypeConstants.DONEE
      );
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    let field = e.target.name;
    let value = e.target.value;

    this.setState({ [field]: value });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.grid}>
        <h1>Donee Login Form</h1>
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.switchForm}>I'm a doner</Button>
          <Button
            onClick={this.handleLogin}
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
