import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../actions/userActions";
import styles from "./login.module.css";
import AuthService from "../../services/AuthService";
import { TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { stateConstants } from "../../constants/stateConstants";

class DonerLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  componentWillMount = () => {
    if (AuthService.loggedIn()) {
      this.setState({ redirect: true });
    }
  };

  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { authState } = this.props;
    let errorMsg;

    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    if (authState === stateConstants.AUTH_ERR) {
      errorMsg = (
        <Typography color="error">Email or Password is incorrect!</Typography>
      );
    }

    return (
      <div className={styles.grid}>
        <h1>Login</h1>
        {errorMsg}
        <TextField
          variant="outlined"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange("email")}
        />
        <TextField
          variant="outlined"
          label="Password"
          value={this.state.password}
          type="password"
          onChange={this.handleChange("password")}
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Login
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: state.auth.state
  };
};

export default connect(
  mapStateToProps,
  { login }
)(DonerLoginForm);
