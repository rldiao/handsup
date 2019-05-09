// https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./doner.module.css";
import AuthService from "../../services/AuthService";
import { TextField } from "@material-ui/core";

// TODO: refactor into material ui components

export default class DonerSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      hasAgreed: false,
      formErrors: { name: "", email: "", password: "", confirmPassword: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      redirect: false
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.name !== "";
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmValid = this.state.confirmValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? "" : "Enter name";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      case "confirmPassword":
        confirmValid = this.state.password === this.state.confirmPassword;
        fieldValidationErrors.confirmPassword = confirmValid
          ? ""
          : "does not match!";
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmValid: confirmValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.hasAgreed &&
        this.state.confirmValid &&
        this.state.name !== ""
    });
  }

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  // Sign up
  handleSubmit = async e => {
    e.preventDefault();
    let that = this;
    const { name, email, password } = this.state;

    AuthService.signup(
      {
        user: {
          name,
          email,
          password
        }
      },
      "user"
    )
      .then(res => {
        that.setState({ redirect: true });
      })
      .catch(function(error) {
        console.log(
          "There has been a problem with your signup: ",
          error.message
        );
        // TODO: change ui to error invalid email.
      });
  };

  render() {
    let nameError;
    let emailError;
    let passwordError;
    let confirmError;

    if (this.state.formErrors.name !== "") {
      nameError = `${this.state.formErrors.name}`;
    }
    if (this.state.formErrors.email !== "") {
      emailError = `Email ${this.state.formErrors.email}`;
    }
    if (this.state.formErrors.password !== "") {
      passwordError = `Password ${this.state.formErrors.password}`;
    }
    if (this.state.formErrors.confirmPassword !== "") {
      confirmError = "Password does not match!";
    }

    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.grid}>
        <h1>Doner Sign Up</h1>
        <TextField
          variant="outlined"
          fullWidth
          label="Name"
          onChange={this.handleChange}
          onFocus={this.handleChange}
          type="text"
          name="name"
          helperText={nameError}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Email"
          onChange={this.handleChange}
          type="email"
          name="email"
          helperText={emailError}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Password"
          onChange={this.handleChange}
          type="password"
          name="password"
          helperText={passwordError}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Confirm Password"
          onChange={this.handleChange}
          type="password"
          name="confirmPassword"
          helperText={confirmError}
        />
        <label className={styles.formFieldCheckBoxLabel}>
          <div>
            <input
              className={styles.formFieldCheckBox}
              type="checkbox"
              name="hasAgreed"
              value={this.state.hasAgreed}
              onChange={this.handleChange}
            />
            I agree all statements in{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="FormField__TermsLink"
            >
              terms of service
            </a>
          </div>
        </label>
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.switchForm}>I'm a donee!</Button>
          <Button
            className={styles.formFieldButton}
            disabled={!this.state.formValid}
            variant="contained"
            onClick={this.handleSubmit}
            color="primary"
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  }
}
