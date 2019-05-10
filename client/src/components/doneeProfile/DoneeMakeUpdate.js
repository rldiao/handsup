import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./doneeProfile.module.css";
import { styles as custom } from "./doneeProfile.style";

export default class DoneeMakeUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      post: "",
      multiline: "Controlled"
    };
  }

  onTitleChange = () => {
    this.setState({ title: this.state.title });
  };

  onPostChange = () => {
    this.setState({ title: this.state.post });
  };

  handlePostClick = () => {
    alert("posted to db");
  };

  handleCancelClick = () => {
    this.props.handleCancelClick(this.state);
  };

  render() {
    // var today = new Date();
    // var date =
    //   today.getDate() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getFullYear();

    return (
      <div>
        <form className={styles.container} noValidate autoComplete="off">
          <TextField
            id="standard-title"
            label="Title"
            multiline
            className={styles.titleField}
            onChange={this.onTitleChange}
          />
        </form>
        <form className={styles.container} noValidate autoComplete="off">
          <TextField
            id="standard-multiline-post"
            label="Your Post"
            placeholder="Write your post"
            multiline
            className={styles.postField}
            onChange={this.onPostChange}
          />
        </form>
        <Button style={custom.postBtn} onClick={this.handlePostClick}>
          Post
        </Button>
        <Button style={custom.cancelBtn} onClick={this.props.handleCancelClick}>
          Cancel
        </Button>
      </div>
    );
  }
}
