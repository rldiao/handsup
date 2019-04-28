import React, { Component, Fragment } from "react";

import styles from "./profileSettings.module.css";
import NavTabs from "./NavTabs";

export default class MainSetting extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false
    };
  }

  handleClick = () => {
    this.setState({ isClicked: true });
    return;
  };

  handleStyle = () => {
    let clicked = this.state.isClicked;
  };

  render() {
    return (
      <Fragment>
        <div className={styles.settingTitle}>Settings</div>
        <div>
          <NavTabs />
        </div>
      </Fragment>
    );
  }
}
