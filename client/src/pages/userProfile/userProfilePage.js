import React, { Component } from "react";
import MainSection from "../../components/userProfile/MainSection";
import SavedDonees from "../../components/userProfile/SavedDonees";
import styles from "./profile.module.css";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { profileStyles } from "./profileStyles";
import {history} from "../../helper/history";

class userProfilePage extends Component {
  constructor() {
    super();
    userProfilePage.routeChange = userProfilePage.routeChange.bind(this);
  }

  static routeChange() {
    history.push("/settings")
  }

  render() {
    return (
      <div className={styles.userProfileContainer}>
        <div className={styles.editProfileButton}>
          <Button
            variant="outlined"
            onClick={userProfilePage.routeChange}
            style={profileStyles.editProfileButton}
          >
            Edit Profile
          </Button>
        </div>
        <MainSection />
        <SavedDonees />
      </div>
    );
  }
}

export default withRouter(userProfilePage);
