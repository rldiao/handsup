import React, { Component } from "react";
import MainSection from "../../components/userProfile/MainSection";
import SavedDonees from "../../components/userProfile/SavedDonees";
import styles from "./profile.module.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { profileStyles } from "./profileStyles";
import { history } from "../../helper/history";
import { userTypeConstants } from "../../constants";
import DoneeNavTab from "../../components/doneeProfile/DoneeNavTab";

class UserProfilePage extends Component {
  constructor() {
    super();
    UserProfilePage.routeChange = UserProfilePage.routeChange.bind(this);
  }

  static routeChange() {
    history.push("/settings");
  }

  render() {
    const { userType } = this.props;
    let content;
    if (userType === userTypeConstants.DONER) {
      content = <SavedDonees />;
    } else if (userType === userTypeConstants.DONEE) {
      content = <div>Donee Nav Tab</div>;
    }
    return (
      <div className={styles.userProfileContainer}>
        <div className={styles.editProfileButton}>
          <Button
            variant="outlined"
            onClick={UserProfilePage.routeChange}
            style={profileStyles.editProfileButton}
          >
            Edit Profile
          </Button>
        </div>
        <MainSection />
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.auth.userType
  };
};

export default connect(mapStateToProps)(UserProfilePage);
