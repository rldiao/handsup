import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../actions/userActions";
import styles from "./doner.module.css";
import AuthService from "../../services/AuthService";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class DonerLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      redirect: false,
      declinedSubmission: false
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
    // TODO: get this to return a promise or change the redux setting
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.grid}>
        <h1>Doner Login</h1>
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
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.switchForm}>I'm a donee!</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(DonerLoginForm);
