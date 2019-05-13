import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import {
  Paper,
  TextField,
  Menu,
  MenuItem,
  IconButton,
  Icon
} from "@material-ui/core";
import Axios from "axios";

export default class DoneePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      anchorEl: null,
      // post
      _id: this.props._id,
      title: this.props.title,
      date: this.props.date,
      content: this.props.content
    };
  }

  handleMenuToggle = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleEditModes = () => {
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

  handlePostRemove = () => {
    // const { _id } = this.state;
    // Axios.delete("/post/" + _id)
    //   .then(res => {
    this.props.handlePostRemove();
    //   })
    //   .catch(err => {
    //     alert("Error removing post");
    //   });
  };

  render() {
    const { title, date, content, editMode, anchorEl } = this.state;

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
              <IconButton
                size="small"
                aria-label="More"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenuToggle}
              >
                <Icon>more_vert</Icon>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    this.handleEditModes();
                    this.handleMenuClose();
                  }}
                >
                  {btnText}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    this.handlePostRemove(this.state._id);
                    this.handleMenuClose();
                  }}
                >
                  Remove
                </MenuItem>
              </Menu>
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
