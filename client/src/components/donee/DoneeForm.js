import React, { Component, Fragment } from "react";
import FormUserDetails from "./FormUserDetails";

import styles from "./donee.module.css";
import FormPersonalDetails from "./FormPersonalDetails";
import PaymentForm from "./PaymentForm";
import Confirm from "./Confirm";

const genders = ["Male", "Female", "Other"];

export class DoneeForm extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    dob: "",
    phone: "",
    gender: "",
    location: "",
    bio: ""
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
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      password,
      confirmPassword,
      name,
      dob,
      phone,
      gender,
      location,
      bio
    } = this.state;
    const values = {
      email,
      password,
      confirmPassword,
      name,
      dob,
      phone,
      gender,
      location,
      bio
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
          <Confirm next={this.nextStep} back={this.prevStep} values={values} />
        );
        break;
      case 5:
        form = <h1>Success</h1>;
        break;
      default:
        form = null;
        throw new Error("Form step not defined!");
    }

    return (
      <Fragment>
        <div className={styles.grid}>{form}</div>
      </Fragment>
    );
  }
}

export default DoneeForm;
