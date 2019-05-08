import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import { profileStyles } from "../../pages/userProfile/profileStyles";
import { Button } from "@material-ui/core";

export default class DoneeAbout extends Component {
  constructor() {
    super();

    this.state = {
      donee: {
        location: "Melbourne",
        story:
          "I come from Melbourne, living in poverty, want to go to school, sob T_T. Please please please help me.",
        goals: [
          "Have enough money to pay tuition fees.",
          "Live without hunger.",
          "Be able to afford rental."
        ]
      }
    };
  }


  handleEditProfileClick = () => {
    this.props.handleEditProfileClick();
  };

  render() {
    return (
      <div className={styles.aboutContainer}>
        <Button
          variant="outlined"
          onClick = {this.handleEditProfileClick}
          style={profileStyles.editProfileButton}
        >
          Edit Profile
        </Button>
        <h2 className={styles.aboutTitle}>Location</h2>
        <p className={styles.aboutText}>{this.props.donee.location}</p>

        <h2 className={styles.aboutTitle}>My Story</h2>
        <p className={styles.aboutText}>{this.props.donee.bio}</p>

        <h2 className={styles.aboutTitle}>Goals</h2>
        <div className={styles.aboutText}>
          <ol>{this.state.donee.goals.map((goal, i) => <li key={i}>{goal}</li>)}
          </ol>
        </div>
      </div>
    );
  }
}
