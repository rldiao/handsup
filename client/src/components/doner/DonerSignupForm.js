// https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

import styles from "./doner.module.css";
import AuthService from "../../services/AuthService";

// TODO: refactor into material ui components

export default class DonerSignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
      formErrors: { name: "", email: "", password: "" },
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
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
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

  // Handle Email already registered
  handleSubmit = async e => {
    e.preventDefault();
    let that = this;

    AuthService.signup(this.state.name, this.state.email, this.state.password)
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

    if (this.state.formErrors.name !== "") {
      nameError = <div className="ErrorMsg">{this.state.formErrors.name}</div>;
    }
    if (this.state.formErrors.email !== "") {
      emailError = (
        <div className="ErrorMsg">Email {this.state.formErrors.email}</div>
      );
    }
    if (this.state.formErrors.password !== "") {
      passwordError = (
        <div className="ErrorMsg">
          Password {this.state.formErrors.password}
        </div>
      );
    }

    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className={styles.formContainer}>
        <div className={styles.container}>
          <h1>Doner Sign Up</h1>
          <form
            className={styles.formFields}
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div className={styles.formField}>
              <label className={styles.formFieldLabel}>Full Name</label>
              <input
                className={styles.formFieldInput}
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                onBlur={this.handleChange}
              />
              {nameError}
            </div>
            <div className={styles.formField}>
              <label className={styles.formFieldLabel}>Email</label>
              <input
                className={styles.formFieldInput}
                id="email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
              {emailError}
            </div>
            <div className={styles.formField}>
              <label className={styles.formFieldLabel}>Password</label>
              <input
                className={styles.formFieldInput}
                id="password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              {passwordError}
            </div>
            <div className={styles.formField}>
              <label className={styles.formFieldCheckBoxLabel}>
                <input
                  className={styles.formFieldCheckBox}
                  type="checkbox"
                  name="hasAgreed"
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />{" "}
                I agree all statements in{" "}
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="FormField__TermsLink"
                >
                  terms of service
                </a>
              </label>
            </div>
            <div className={styles.formField}>
              <Button
                className={styles.formFieldButton}
                disabled={!this.state.formValid}
                variant="contained"
                type="submit"
              >
                Sign Up
              </Button>
              <Button onClick={this.props.switchForm}>I'm a donee!</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
