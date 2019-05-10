import React, { Component } from "react";

import styles from "./contactPage.module.css";
import { TextField, Button } from "@material-ui/core";

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      subject: "",
      email: "",
      message: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(
      `Name: ${this.state.name}\nSubject: ${this.state.subject}\nEmail: ${
        this.state.email
      }\nMessage:\n${this.state.message}`
    );
  };

  render() {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={this.handleSubmit}>
            <h1>Contact Us</h1>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.textField}
                label="Name"
                variant="outlined"
                value={this.state.name}
                margin="normal"
                onChange={this.handleChange("name")}
              />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.textField}
                label="Subject"
                variant="outlined"
                value={this.state.subject}
                margin="normal"
                onChange={this.handleChange("subject")}
              />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.textField}
                label="Email"
                variant="outlined"
                value={this.state.email}
                margin="normal"
                onChange={this.handleChange("email")}
              />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.textField}
                label="Message"
                variant="outlined"
                value={this.state.message}
                margin="normal"
                multiline
                rows="10"
                onChange={this.handleChange("message")}
              />
            </div>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
