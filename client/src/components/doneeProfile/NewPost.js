import React from "react";
import styles from "./doneeProfile.module.css";
import PropTypes from "prop-types";
import { TextField, Button, withStyles } from "@material-ui/core";

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
            placeholder="Title"
            onChange={props.handleTitleChange("newPostTitle")}
            value={props.titleValue}
          />
        </div>
        <div className={styles.newPostTextField}>
          <TextField
            fullWidth
            multiline
            rows="4"
            placeholder="What's new?"
            onChange={props.handleContentChange("newPostContent")}
            value={props.contentValue}
          />
        </div>
        <div className={styles.newPostBtns}>
          <Button onClick={props.submitNewPost}>Post</Button>
          <Button onClick={props.handleClearClick}>Clear</Button>
        </div>
      </div>
    </div>
  );
}

NewPost.propTypes = {
  titleValue: PropTypes.object.isRequired,
  contentValue: PropTypes.object.isRequired
};

export default withStyles(muStyles)(NewPost);
