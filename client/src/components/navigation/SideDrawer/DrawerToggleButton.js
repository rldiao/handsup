import React, { Component } from "react";
import styles from "./DrawerToggleButton.module.css";

const DrawerToggleButton = props => (
  <button className={styles.toggleButton} onClick={props.click}>
    <div className={styles.toggleButtonLine} />
    <div className={styles.toggleButtonLine} />
    <div className={styles.toggleButtonLine} />
  </button>
);

export default DrawerToggleButton;
