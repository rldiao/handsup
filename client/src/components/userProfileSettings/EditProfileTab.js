import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "./setting.module.css";
import { styles as custom } from "./userProfileSettings.style";

const donor = {
  fullname: "Zachary Ho",
  profilepic:
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2602&q=80"
};

class EditProfileTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentWillMount = () => {
    this.setState({ name: donor.fullname });
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    // call express backend
    // axios("/user")
  };

  handleFocus = () => {
    this.value = this.value;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={styles.accountContainer}>
        <form onSubmit={this.handleSubmit}>
          <h3>Full Name</h3>
          <input
            type="text"
            name="name"
            onFocus={this.handleFocus}
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </form>
        <h3>Profile Picture</h3>
        <div>
          <img
            className={styles.donorImg}
            alt="Donor's Profile Picture"
            src={donor.profilepic}
          />
          <input
            accept="image/*"
            className={styles.display}
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button component="span" style={custom.uploadBtn}>
              Upload Image
            </Button>
          </label>
        </div>
        <div>
          <Button style={custom.saveBtn}>Save Settings</Button>
          <Button style={custom.viewProfileBtn}>View Profile</Button>
        </div>
      </div>
    );
  }
}

EditProfileTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfileTab);
