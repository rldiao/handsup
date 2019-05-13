import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import DoneeAbout from "./DoneeAbout";
import EditDoneeProfile from "./EditDoneeProfile";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";

import styles from "./doneeProfile.module.css";
import { styles as custom } from "./doneeProfile.style";
import DoneePostTab from "./DoneePostTab";

class DoneeNavTab extends Component {
  state = {
    value: 0,
    newUpdate: false,
    editProfile: false
  };

  handleEditProfileClick = () => {
    this.setState({ editProfile: true });
  };

  handleExitEditingClick = () => {
    this.setState({ editProfile: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const editDoneeProfile = (
      <EditDoneeProfile
        donee={this.props.donee}
        handleCancelClick={this.handleExitEditingClick}
        handleSaveClick={this.handleExitEditingClick}
      />
    );
    const doneeAbout = (
      <DoneeAbout
        donee={this.props.donee}
        handleEditProfileClick={this.handleEditProfileClick}
      />
    );

    let EditProfileTab = this.state.editProfile ? editDoneeProfile : doneeAbout;

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
          {value === 0 && EditProfileTab}
          {value === 1 && <DoneePostTab donee={this.props.donee} />}
        </div>
      </NoSsr>
    );
  }
}
export default DoneeNavTab;
