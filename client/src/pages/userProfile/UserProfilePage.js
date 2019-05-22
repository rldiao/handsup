import React, { Component } from "react";
import MainSection from "../../components/userProfile/MainSection";
import SavedDonees from "../../components/userProfile/SavedDonees";
import MainInfo from "../../components/doneeProfile/MainInfo";
import styles from "./profile.module.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { profileStyles } from "./profileStyles";
import { history } from "../../helper/history";
import { userTypeConstants } from "../../constants";
import Axios from "axios";
import AuthService from "../../services/AuthService";
import DoneeNavTab from "../../components/doneeProfile/DoneeNavTab";

class UserProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    UserProfilePage.routeChange = UserProfilePage.routeChange.bind(this);
  }

  static routeChange() {
    history.push("/settings");
  }

  componentWillMount() {
    const { userType } = this.props;
    if (userType === userTypeConstants.DONEE) {
      this.loadDonee();
      console.log(this.state.user);
    }
  }

  loadDonee = () => {
    const id = AuthService.getProfile().id;
    Axios.get("/donee/" + id).then(res => {
      this.setState({ user: res.data });
    });
  };

  render() {
    const { userType } = this.props;

    let content;
    let mainInfo;
    if (this.state.user !== null) {
      content = <DoneeNavTab donee={this.state.user} userType={userType} />;
      mainInfo = <MainInfo donee={this.state.user} userType={userType} />;
    }

    if (userType === userTypeConstants.DONOR) {
      content = <SavedDonees />;

      mainInfo = (
        <div>
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
        </div>
      );
    }
    return (
      <div className={styles.userProfileContainer}>
        {mainInfo}
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
