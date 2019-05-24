import React, { Component } from "react";
import { Button, List, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";

import styles from "./donee.module.css";

// Standard Material UI method of providing styles
const muStyles = theme => ({
  root: {
    padding: 0
  }
});

export class Confirm extends Component {
  next = e => {
    let submit = window.confirm("Are all details correct?");
    if (submit && this.props.validForm) {
      this.props.handleSignup(e);
      this.props.next();
    } else {
      alert("Required fields are missing!");
    }
  };

  render() {
    const { values, classes, className } = this.props;

    return (
      <div>
        <h2>Confirm</h2>
        <List>
          <h4>Account Details</h4>
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Email*"
            secondary={values.email || "Not Provided"}
          />
          <h4>Personal Details</h4>
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Full Name*"
            secondary={values.name || "Not Provided"}
          />
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Gender*"
            secondary={values.gender || "Not Provided"}
          />
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Date of Birth*"
            secondary={values.dob || "Not Provided"}
          />
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Phone"
            secondary={values.phone || "Not Provided"}
          />
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Location*"
            secondary={values.location || "Not Provided"}
          />
          <ListItemText
            className={classnames(classes.root, className)}
            primary="Bio"
            secondary={values.bio || "Not Provided"}
          />
        </List>
        <div className={styles.gridItemSplit}>
          <Button onClick={this.props.back}>Back</Button>
          <Button variant="contained" color="primary" onClick={this.next}>
            Confirm
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(muStyles)(Confirm);
