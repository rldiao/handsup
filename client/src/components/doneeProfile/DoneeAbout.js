import React, { Component, Fragment } from "react";
import styles from "./doneeProfile.module.css";
import { userTypeConstants } from "../../constants";
import { profileStyles } from "../../pages/userProfile/profileStyles";
import { Button } from "@material-ui/core";

export default class DoneeAbout extends Component {
  handleEditProfileClick = () => {
    this.props.handleEditProfileClick();
  };

  render() {
    const userType = this.props.donee.userType;
    let editButton;
    if (userType === userTypeConstants.DONEE) {
      editButton = (
        <Button
          variant="outlined"
          onClick={this.handleEditProfileClick}
          style={profileStyles.editProfileButton}
        >
          Edit Profile
        </Button>
      );
    }
    return (
      <Fragment>
        {editButton}
        <h2 className={styles.aboutTitle}>Location</h2>
        <p className={styles.aboutText}>{this.props.donee.location}</p>

        <h2 className={styles.aboutTitle}>My Story</h2>
        <p className={styles.aboutText}>{this.props.donee.bio}</p>

        <h2 className={styles.aboutTitle}>Goals</h2>
        <div className={styles.aboutText}>
          <ol>
            {this.props.donee.goal.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ol>
        </div>
      </Fragment>
    );
  }
}
