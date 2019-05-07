import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/userActions";
import Button from "@material-ui/core/Button";

import styles from "./doner.module.css";
import AuthService from "../../services/AuthService";

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

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
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
      <div className={styles.formContainer}>
        <div className={styles.container}>
          <h1>Doner Login</h1>
          <form className={styles.formFields} onSubmit={this.handleSubmit}>
            <div className={styles.formField}>
              <label className={styles.formFields}>Email</label>
              <input
                className={styles.formFieldInput}
                id="email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formFields}>Password</label>
              <input
                className={styles.formFieldInput}
                id="password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.formField}>
              <Button onClick={this.props.switchForm}>I'm a donee</Button>
              <Button
                variant="contained"
                className={styles.formFieldButton}
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(DonerLoginForm);
