import React, { Component } from "react";
import styles from "./userProfile.module.css";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Button
} from "@material-ui/core";
import { userStyles } from "./userStyles";
import { BorderLinearProgress } from "./BorderLinearProgress";

export default class DoneeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.donee.name,
      email: this.props.donee.email
    };
  }

  handleDoneeClick = () => {
    this.props.handleDoneeClick(this.state);
  };

  handleButtonClick = () => {
    this.props.handleButtonClick(this.state);
  };

  // props: donee
  render() {
    return (
      <Card style={userStyles.doneeCard}>
        <CardContent>
          <CardActionArea onClick={this.handleDoneeClick}>
            <img
              className={styles.doneePicture}
              alt="Donee"
              src={this.props.donee.profilePicture}
            />
            <Typography gutterBottom variant="h6" component="h3">
              {this.props.donee.name}
            </Typography>
            <Typography component="p" style={userStyles.doneeTypography}>
              {this.props.donee.bio}
            </Typography>
          </CardActionArea>

          <BorderLinearProgress
            variant="determinate"
            value={this.props.progressWidth}
          />
          <Typography variant="body2">
            ${this.props.donee.funded}
            funded of ${this.props.donee.monthlyDonationLimit}
          </Typography>
          <Button
            onClick={this.handleButtonClick}
            style={userStyles.doneeButton}
            size="large"
            variant="outlined"
          >
            {" "}
            {this.props.btnText}
          </Button>
          <Typography variant="subtitle1">
            Until {this.props.donee.monthlyRenewalDate}
          </Typography>
          <div className={styles.doneeLocation}>
            <img
              className={styles.locationIcon}
              alt="Location Icon"
              src="http://dawimmigration.com/wp-content/uploads/2015/01/location-24-256.png"
            />
            <Typography component="p">{this.props.donee.location}</Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}
