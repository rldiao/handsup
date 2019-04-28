import React, { Component, Fragment } from "react";
import styles from "./DrawerToggleButton.module.css";
import Avatar from "@material-ui/core/Avatar";
import profilePicture from "../../../assets/img/profilepic.jpg";

// class DrawerToggleButton extends Component {
//   render() {
// let toggleButtonShape;
// let loggedIn = 1;

// if (
//   loggedIn
//   // User is logged in
// ) {
//   toggleButtonShape = (
//     <button className={styles.toggleButton} onClick={this.props.click}>
//       <Avatar
//         alt="ProfilePic"
//         src={profilePicture}
//         className={styles.avatar}
//       />
//     </button>
//   );
// } else {
//   toggleButtonShape = (
//     <button className={styles.toggleButton} onClick={this.props.click}>
//       <div className={styles.toggleButtonLine} />
//       <div className={styles.toggleButtonLine} />
//       <div className={styles.toggleButtonLine} />
//     </button>
//   );
// }

//     return { toggleButtonShape };
//   }
// }

const DrawerToggleButton = props => {
  let toggleButtonShape;
  let loggedIn = 1;

  if (
    loggedIn
    // User is logged in
  ) {
    toggleButtonShape = (
      <button className={styles.toggleButton} onClick={props.click}>
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

// return (
//   <button className={styles.toggleButton} onClick={props.click}>
//     <Avatar alt="ProfilePic" src={profilePicture} className={styles.avatar} />
//     <div className={styles.toggleButtonLine} />
//     <div className={styles.toggleButtonLine} />
//     <div className={styles.toggleButtonLine} />
//   </button>
// );
export default DrawerToggleButton;
