import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Button from "@material-ui/core/Button";

import styles from "./form.module.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      redirect: false
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
    let that = this;
    AuthService.login(this.state.email, this.state.password)
      .then(res => {
        that.setState({ redirect: true });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.formContainer}>
        <div className={styles.container}>
          <div className={styles.formHeader}>Login</div>
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
              <Button
                variant="contained"
                className={styles.formFieldButton}
                type="submit"
              >
                Sign In
              </Button>
              <Link to="/signup" className={styles.formFieldLink}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
