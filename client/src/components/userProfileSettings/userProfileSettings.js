import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
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
    let passwordBtnStyle = this.state.showPasswordComponent
      ? custom.showDropDownPasswordBtn
      : custom.hideDropDownPasswordBtn;

    let paymentBtnStyle = this.state.showPaymentComponent
      ? custom.showDropDownPaymentBtn
      : custom.hideDropDownPaymentBtn;

    return (
      <div className={styles.settingsContainer}>
        <div className={styles.content}>
          <div className={styles.settingTitle}>Settings</div>
          <AccountDetails />
          <List>
            <ListItem
              button
              onClick={this.handlePasswordBtn}
              style={passwordBtnStyle}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography style={custom.listItemText}>
                    Change Password
                  </Typography>
                }
              />
              {this.state.showPasswordComponent ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
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
              style={paymentBtnStyle}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography style={custom.listItemText}>
                    Payment Details
                  </Typography>
                }
              />
              {this.state.showPaymentComponent ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
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
      </div>
    );
  }
}
