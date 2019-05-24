import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

import styles from "./donee.module.css";
import FormPersonalDetails from "./FormPersonalDetails";
import PaymentForm from "./PaymentForm";
import Confirm from "./Confirm";
import Success from "./Success";
import AuthService from "../../services/AuthService";
import { history } from "../../helper/history";

const genders = ["Male", "Female", "Other"];

export class DoneeSignupForm extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    dob: "",
    phoneNumber: "",
    gender: "",
    location: "",
    bio: "",
    formErrors: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      dob: "",
      gender: "",
      location: ""
    },
    validForm: false
  };

  validateField(field, value) {
    let { formErrors } = this.state;

    switch (field) {
      case "email":
        let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? "" : "is invalid";
        break;
      case "password":
        let passwordValid = value.length >= 6;
        formErrors.password = passwordValid ? "" : "is too short";
        break;
      case "confirmPassword":
        let confirmValid = value === this.state.password;
        formErrors.confirmPassword = confirmValid ? "" : "does not match";
        break;
      case "name":
        let nameValid = value !== "";
        formErrors.name = nameValid ? "" : "Enter name";
        break;
      case "dob":
        let dobValid = value.match(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
        );
        formErrors.dob = dobValid ? "" : "incorrect date format";
        break;
      case "gender":
        let genderValid = value !== "";
        formErrors.gender = genderValid ? "" : "Enter gender";
        break;
      case "location":
        let locValid = value !== "";
        formErrors.location = locValid ? "" : "Enter location";
        break;
      default:
        break;
    }

    this.setState({ formErrors });
  }

  validateForm = () => {
    let valid = true;
    const { formErrors } = this.state;

    Object.keys(formErrors).forEach(key => {
      if (formErrors[key] !== "") {
        valid = false;
      }
    });

    return valid;
  };

  handleSignup = async e => {
    e.preventDefault();

    const {
      email,
      password,
      name,
      dob,
      phoneNumber,
      gender,
      location,
      bio
    } = this.state;

    AuthService.signup(
      {
        user: {
          email,
          password,
          name,
          dob,
          phoneNumber,
          gender,
          location,
          bio
        }
      },
      "donee"
    )
      .then(() => {
        history.push("/signup");
      })
      .catch(res => {
        console.log("error: " + res);
      });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = field => e => {
    const value = e.target.value;
    this.setState({ [field]: value }, () => {
      this.validateField(field, value);
      const isValidForm = this.validateForm();
      this.setState({ validForm: isValidForm });
    });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      password,
      confirmPassword,
      name,
      dob,
      phoneNumber,
      gender,
      location,
      bio,
      formErrors
    } = this.state;
    const values = {
      email,
      password,
      confirmPassword,
      name,
      dob,
      phoneNumber,
      gender,
      location,
      bio,
      formErrors
    };
    let form;

    switch (step) {
      case 1:
        form = (
          <FormUserDetails
            next={this.nextStep}
            back={this.prevStep}
            values={values}
            handleChange={this.handleChange}
            switchForm={this.props.switchForm}
            validateForm={this.validateForm}
          />
        );
        break;
      case 2:
        form = (
          <FormPersonalDetails
            next={this.nextStep}
            back={this.prevStep}
            values={values}
            genders={genders}
            handleChange={this.handleChange}
            validateForm={this.validateForm}
          />
        );
        break;
      case 3:
        form = (
          <PaymentForm
            next={this.nextStep}
            back={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
        break;
      case 4:
        form = (
          <Confirm
            next={this.nextStep}
            back={this.prevStep}
            values={values}
            handleSignup={this.handleSignup}
            validForm={this.state.validForm}
          />
        );
        break;
      case 5:
        form = <Success />;
        break;
      default:
        form = null;
        throw new Error("Form step not defined!");
    }

    return (
      <div className={styles.grid}>
        <h1>Donee Sign Up</h1>
        {form}
      </div>
    );
  }
}

export default DoneeSignupForm;
