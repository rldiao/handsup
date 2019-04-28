import React, { Component } from "react";
import styles from "./DrawerToggleButton.module.css";
import Avatar from "@material-ui/core/Avatar";
import profilePicture from "../../../assets/img/profilepic.jpg";

const DrawerToggleButton = props => (
  <button className={styles.toggleButton} onClick={props.click}>
    <Avatar alt="ProfilePic" src={profilePicture} className={styles.avatar} />
    <div className={styles.toggleButtonLine} />
    <div className={styles.toggleButtonLine} />
    <div className={styles.toggleButtonLine} />
  </button>
);

export default DrawerToggleButton;
