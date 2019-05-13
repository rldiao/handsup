import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import { Paper, Button, TextField } from "@material-ui/core";
import Axios from "axios";

export default class DoneePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      _id: this.props._id,
      title: this.props.title,
      date: this.props.date,
      content: this.props.content
    };
  }

  handleModes = () => {
    const { editMode, _id, title, content } = this.state;
    this.setState({ editMode: !editMode });
    if (this.state.editMode) {
      // save content
      Axios.post("/post/edit/" + _id, {
        title,
        content
      }).catch(err => {
        alert("Post failed to update!");
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, date, content, editMode } = this.state;

    let titleComponent, contentComponent;
    if (editMode) {
      titleComponent = (
        <TextField
          className={styles.postTitle}
          fullWidth
          name="title"
          value={title}
          onChange={this.handleChange}
        />
      );
      contentComponent = (
        <p>
          <TextField
            className={styles.postContent}
            fullWidth
            name="content"
            value={content}
            onChange={this.handleChange}
          />
        </p>
      );
    } else {
      titleComponent = <span className={styles.postTitle}>{title}</span>;
      contentComponent = <p className={styles.postContent}>{content}</p>;
    }

    let btnText = editMode ? "Save" : "Edit";

    return (
      <Paper style={{ padding: "1rem" }}>
        <div className={styles.postContainer}>
          <div className={styles.postTitleContainer}>
            {titleComponent}
            <span className={styles.spacer} />
            <span className={styles.postEditBtn}>
              <Button size="small" onClick={this.handleModes}>
                {btnText}
              </Button>
            </span>
          </div>
          <div className={styles.postDate} dateTime={date}>
            {date}
          </div>
          {contentComponent}
        </div>
      </Paper>
    );
  }
}
