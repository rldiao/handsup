import React, { Component } from "react";

import styles from "./setting.module.css";
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
      <div>
        {/* <div className={styles.background} /> */}
        <p className={styles.settingTitle}>Settings</p>
        {/* <div>
          <Button onChange={this.handleChange}>Account</Button>
        </div> */}
        <div>
          <NavTabs />
        </div>
      </div>
    );
  }
}
