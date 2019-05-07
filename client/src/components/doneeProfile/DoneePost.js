import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import styles from "./doneeProfile.module.css";
import { styles as custom } from "./doneeProfile.style";

const donee = {
  title: "Finally found a job!",
  date: "20th February 2019",
  post:
    "Ea tempor duis dolor incididunt laboris minim et consequat qui ullamco occaecat. Eiusmod quis nulla quis do elit reprehenderit qui occaecat dolor dolor cillum sit. Elit ea sit dolore ipsum culpa sunt ut do quis."
};

export default class DoneePost extends Component {
  handleNewUpdateClick = () => {
    this.props.handleNewUpdateClick(this.state);
  };

  render() {
    return (
      // <div className={styles.postContainer}>
      //   <title className={styles.title}>{this.props.donee.title}</title>
      //   <time datetime={this.props.donee.date}>{this.props.donee.date}</time>
      //   <p className={styles.postContent}>{this.props.donee.post}</p>
      // </div>
      <Fragment>
        <Button
          style={custom.newUpdateBtn}
          onClick={this.props.handleNewUpdateClick}
        >
          <Icon style={custom.addIcon}>add</Icon>New
        </Button>
        <div className={styles.postContainer}>
          <title className={styles.title}>{donee.title}</title>
          <time className={styles.time} datetime={donee.date}>
            {donee.date}
          </time>
          <p className={styles.postContent}>{donee.post}</p>
        </div>
      </Fragment>
    );
  }
}
