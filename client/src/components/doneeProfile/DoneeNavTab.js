import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import DoneeAbout from "./DoneeAbout";
import Paper from "@material-ui/core/Paper";

import styles from "./doneeProfile.module.css";
import { styles as custom } from "./doneeProfile.style";
import DoneePostTab from "./DoneePostTab";

class DoneeNavTab extends Component {
  state = {
    value: 0,
    newUpdate: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <NoSsr>
        <Paper position="static">
          <Tabs
            indicatorColor="primary"
            value={value}
            onChange={this.handleChange}
            classes={{ root: styles.navtab }}
          >
            <Tab label="About" style={custom.tabLabel} />
            <Tab label="Updates" style={custom.tabLabel} />
          </Tabs>
        </Paper>
        <div className={styles.tabContainer}>
          {value === 0 && <DoneeAbout donee={this.props.donee} />}
          {value === 1 && <DoneePostTab donee={this.props.donee} />}
        </div>
      </NoSsr>
    );
  }
}
export default DoneeNavTab;
