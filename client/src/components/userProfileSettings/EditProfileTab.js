import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Axios from "axios";
// import AuthService from "../../services/AuthService";

import styles from "./profileSettings.module.css";
import { styles as custom } from "./userProfileSettings.style";

class EditProfileTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      profilePic: null
    };
  }

  //   componentWillMount = () => {
  //     this.setState({ name: donor.fullname });
  //   };

  //   handleChange = event => {
  //     this.setState({
  //       name: event.target.value
  //     });
  //   };

  //   handleImg = event => {
  //     if (event.target.files[0]) {
  //       this.setState({ profilePic: URL.createObjectURL(event.target.files[0]) });
  //     }

  //     this.setState({
  //       profilePic: URL.createObjectURL(event.target.files[0])
  //     });
  //   };

  //   handleSubmit = () => {
  //     profile = AuthService.getProfile();
  //     try {
  //       Axios.get(
  //         "/" + profile.email,)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   handleFocus = () => {
  //     this.value = this.value;
  //   };

  render() {
    const { classes } = this.props;

    return (
      <div className={styles.settingsContainer}>
        <h2 className={styles.heading}>Your Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formCell}>
            <label className={styles.subheading}>Full Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              className={styles.input}
            />
          </div>
        </form>
        <div className={styles.formCell}>
          <label className={styles.subheading}>Profile Picture</label>
          <img className={styles.donorImg} src={donor.profilePic} alt=" " />
          {/* <img
            className={styles.donorImg}
            alt=" "
            src={this.state.profilePic}
          /> */}
          {/* <div className={styles.uploadBtnContainer}>
            <input
              accept="image/*"
              //   className={styles.display}
              id="contained-button-file"
              type="file"
              onChange={this.handleImg}
            /> */}
          {/* <label htmlFor="contained-button-file">
              <Button
                variant="outlined"
                component="span"
                style={custom.uploadBtn}
              >
                Upload Image
              </Button>
            </label> */}
          {/* </div> */}
        </div>
        <div>
          <Button style={custom.saveBtn}>Save Settings</Button>
        </div>
      </div>
    );
  }
}

EditProfileTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfileTab);
