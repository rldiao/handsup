import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import { userTypeConstants } from "../../constants";
import Axios from "axios";
import { BorderLinearProgress } from "../userProfile/BorderLinearProgress";
import { Button, Typography } from "@material-ui/core";
import { profileStyles } from "../../pages/userProfile/profileStyles";

export default class MainInfo extends Component {
  render() {
    const userType = this.props.userType;
    let donateButton;
    if (userType === userTypeConstants.DONOR) {
      donateButton = (
        <Button
          variant="outlined"
          onClick={this.props.handleDonate}
          style={profileStyles.saveButton}
        >
          Donate Now
        </Button>
      );
    }

    const progressWidth =
      (this.props.donee.funded / this.props.donee.monthlyDonationLimit) * 100;

    let name = this.props.donee.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <div className={styles.doneeProfileContainer}>
        <div className={styles.pictureContainer}>
          <img
            className={styles.doneePicture}
            alt="Donee"
            src={this.props.donee.profilePicture}
          />
        </div>
        <div className={styles.doneeDetailsContainer}>
          <p className={styles.doneeName}>{name}</p>
          <BorderLinearProgress variant="determinate" value={progressWidth} />
          <div className={styles.amountFunded}>${this.props.donee.funded}</div>
          <Typography variant="subtitle1">
            funded of ${this.props.donee.monthlyDonationLimit}
          </Typography>
          <Typography variant="subtitle1">
            Until {this.props.donee.monthlyRenewalDate}
          </Typography>
          <br />
          {donateButton}
        </div>
      </div>
    );
  }
}
