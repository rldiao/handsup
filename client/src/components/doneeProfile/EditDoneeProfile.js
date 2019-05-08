import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import { profileStyles } from "../../pages/userProfile/profileStyles";
import { Button, TextField } from "@material-ui/core";

export default class EditDoneeProfile extends Component {
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


  handleCancelClick = () => {
    this.props.handleCancelClick();
  };

  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.buttonContainer}>
          <Button
            variant="outlined"
            style={profileStyles.saveButton}
            // onClick = {}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={this.handleCancelClick}
            style={profileStyles.editProfileButton}
          >
            Cancel
          </Button>
        </div>

        <h2 className={styles.aboutTitle}>Location</h2>

          <input
            type="Location"
            id="Location"
            name="Location"
            defaultValue={this.props.donee.location}
            className={styles.locationInput}
          />


        <h2 className={styles.aboutTitle}>My Story</h2>

          <textarea
            type="My Story"
            defaultValue={this.props.donee.bio}
            className={styles.editText}
          />


        <h2 className={styles.aboutTitle}>Goals</h2>


        <div className={styles.aboutText}>
          <ol>{this.state.donee.goals.map((goal, i) =>
            <div className={styles.textContainer}
              key={i}>
              <textarea
              type="Goals"
              defaultValue={goal}
              className={styles.editText}
            />
            </div>)}
          </ol>
        </div>
      </div>
    );
  }
}
