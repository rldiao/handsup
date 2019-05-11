import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
// import Axios from "axios";
import { BorderLinearProgress } from "../userProfile/BorderLinearProgress";
import { Button, Typography } from "@material-ui/core";
import { profileStyles } from "../../pages/userProfile/profileStyles";

export default class MainInfo extends Component {
  render() {
    const progressWidth =
      (this.props.donee.funded / this.props.donee.monthlyDonationLimit) * 100;

    return (
      <div className={styles.doneeProfileContainer}>
        <div className={styles.pictureContainer}>
          <img
            className={styles.doneePicture}
            alt="Donee's Picture"
            src={this.props.donee.profilePicture}
          />
        </div>
        <div className={styles.doneeDetailsContainer}>
          <p className={styles.doneeName}>{this.props.donee.name}</p>
          <BorderLinearProgress variant="determinate" value={progressWidth} />
          <div className={styles.amountFunded}>${this.props.donee.funded}</div>
          <Typography variant="subtitle1">
            funded of ${this.props.donee.monthlyDonationLimit}
          </Typography>
          <Typography variant="subtitle1">
            Until {this.props.donee.monthlyRenewalDate}
          </Typography>
          <br />
          <Button
            variant="outlined"
            // onClick={}
            style={profileStyles.saveButton}
          >
            Donate Now
          </Button>
        </div>
      </div>
    );
  }
}
