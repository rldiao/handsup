import React, { Component } from "react";
import MainSection from "../../components/userProfile/MainSection";
import SavedDonees from "../../components/userProfile/SavedDonees";
import styles from "./profile.module.css";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { profileStyles } from "./profileStyles";

class UserProfilePage extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = "/settings";
    this.props.history.push(path);
  }

  render() {
    return (
      <div className={styles.userProfileContainer}>
        <div className={styles.editProfileButton}>
          <Button
            variant="outlined"
            onClick={this.routeChange}
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

export default withRouter(UserProfilePage);
