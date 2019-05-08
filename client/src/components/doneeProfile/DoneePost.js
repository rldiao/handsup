import React from "react";
import styles from "./doneeProfile.module.css";
import { Paper } from "@material-ui/core";

export default function DoneePost(props) {
  return (
    <Paper style={{ padding: "1rem" }}>
      <div className={styles.postContainer}>
        <title className={styles.postTitle}>{props.title}</title>
        <time className={styles.postDate} dateTime={props.date}>
          {props.date}
        </time>
        <p className={styles.postContent}>{props.content}</p>
      </div>
    </Paper>
  );
}
