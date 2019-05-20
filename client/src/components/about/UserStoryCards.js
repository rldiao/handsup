import React, { Component } from "react";
import styles from "./userStoryCards.module.css";

export default class UserStoryCards extends Component {
  render() {
    const { content, author } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.content}>{content}</div>
        <div className={styles.authorTag}>
          <img
            className={styles.authorProfilePic}
            alt="profile"
            src={require("../../assets/img/profile/eberhard-grossgasteiger-242155-unsplash (2).jpg")}
          />
          <div className={styles.authorName}>{author}</div>
        </div>
      </div>
    );
  }
}
