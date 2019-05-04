import React, { Fragment } from "react";
import { connect } from "react-redux";
import styles from "./DrawerToggleButton.module.css";
import Avatar from "@material-ui/core/Avatar";
import profilePicture from "../../../assets/img/profilepic.jpg";
import { stateConstants } from "../../../constants/stateConstants";
import classNames from "classnames";

const DrawerToggleButton = props => {
  let toggleButtonShape;
  let loggedIn = props.authState === stateConstants.AUTH;

  if (loggedIn) {
    toggleButtonShape = (
      <button
        className={classNames(styles.toggleButton, styles.toggleButtonAvatar)}
        onClick={props.click}
      >
        <Avatar
          alt="ProfilePic"
          src={profilePicture}
          className={styles.avatar}
        />
      </button>
    );
  } else {
    toggleButtonShape = (
      <button className={styles.toggleButton} onClick={props.click}>
        <div className={styles.toggleButtonLine} />
        <div className={styles.toggleButtonLine} />
        <div className={styles.toggleButtonLine} />
      </button>
    );
  }

  return <Fragment>{toggleButtonShape}</Fragment>;
};

const mapStateToProps = state => {
  return {
    authState: state.auth.state
  };
};

export default connect(mapStateToProps)(DrawerToggleButton);
