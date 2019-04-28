import React, { Component } from "react";
import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import AccountDetails from "./AccountDetails";
import ChangePassword from "./ChangePassword";
import PaymentForm from "./PaymentForm";

import styles from "./profileSettings.module.css";
import { styles as custom } from "./userProfileSettings.style";

export default class UserProfileSettings extends Component {
  constructor() {
    super();

    this.state = {
      showPasswordComponent: false,
      showPaymentComponent: false
    };
  }

  handlePasswordBtn = () => {
    this.setState({ showPasswordComponent: !this.state.showPasswordComponent });
  };

  handlePaymentBtn = () => {
    this.setState({ showPaymentComponent: !this.state.showPaymentComponent });
  };

  render() {
    return (
      <div className={styles.settingsContainer}>
        <div className={styles.settingTitle}>Settings</div>
        <AccountDetails />
        <List>
          <ListItem
            button
            onClick={this.handlePasswordBtn}
            style={custom.dropDownBtn}
          >
            <ListItemText inset primary="Change Password" />
          </ListItem>
          <Collapse
            in={this.state.showPasswordComponent}
            timeout="auto"
            unmountOnExit
          >
            <List>
              <ListItem>
                <ChangePassword />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            onClick={this.handlePaymentBtn}
            style={custom.dropDownBtn}
          >
            <ListItemText inset primary="Payment Details" />
          </ListItem>
          <Collapse
            in={this.state.showPaymentComponent}
            timeout="auto"
            unmountOnExit
          >
            <List>
              <ListItem>
                <PaymentForm />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}
