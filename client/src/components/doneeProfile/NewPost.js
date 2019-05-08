import React from "react";
import styles from "./doneeProfile.module.css";
import { TextField, Button, withStyles } from "@material-ui/core";
import classnames from "classnames";

const muStyles = theme => ({
  root: {
    marginLeft: "1rem",
    marginRight: "1rem"
  }
});

function NewPost(props) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.newPostBorderBox}>
        <div className={styles.newPostLabel}>Create Post</div>
        <div className={styles.newPostTextField}>
          <TextField
            fullWidth
            multiline
            rows="4"
            placeholder="What's new?"
            onChange={props.handleChange("newPostContent")}
          />
        </div>
        <div className={styles.newPostBtns}>
          <Button onClick={props.submitNewPost}>Post</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(muStyles)(NewPost);
