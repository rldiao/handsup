import React, { Component } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import DoneeAbout from "./DoneeAbout";
import DoneeMakeUpdate from "./DoneeMakeUpdate";
import Paper from "@material-ui/core/Paper";
import classnames from "classnames";

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

    const { classes } = this.props;

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
        <div
          className={classnames(styles.tabContainer, styles.tabContainerGrid)}
        >
          {value === 0 && <DoneeAbout />}
          {value === 1 && <DoneePostTab />}
        </div>
      </NoSsr>
    );
  }
}
export default DoneeNavTab;
