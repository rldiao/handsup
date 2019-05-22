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
    let listItemChangePassword = this.state.showPasswordComponent
      ? custom.settingsBtnShowContent
      : custom.settingsBtnHideContent;
    let listItemPayment = this.state.showPaymentComponent
      ? custom.settingsBtnShowContent
      : custom.settingsBtnHideContent;

    return (
      <div className={styles.settingsContainer}>
        <div className={styles.settingsContent}>
          <div className={styles.settingTitle}>Settings</div>
          <AccountDetails />
          <List>
            <div className={styles.formBorder}>
              <ListItem
                button
                variant="outlined"
                onClick={this.handlePasswordBtn}
                style={listItemChangePassword}
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
            </div>
            <div className={styles.formBorder}>
              <ListItem
                button
                onClick={this.handlePaymentBtn}
                style={listItemPayment}
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
            </div>
          </List>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import AccountDetails from "./AccountDetails";
// import PaymentForm from "./PaymentForm";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { ExpandLess, ExpandMore } from "@material-ui/icons";

// import styles from "./profileSettings.module.css";
// import { styles as custom } from "./userProfileSettings.style";

// export default class userProfileSettings extends Component {
//   state = {
//     showPasswordComponent: false,
//     showPaymentComponent: false
//   };

//   handlePasswordBtn = () => {
//     this.setState({ showPasswordComponent: !this.state.showPasswordComponent });
//   };

//   handlePaymentBtn = () => {
//     this.setState({ showPaymentComponent: !this.state.showPaymentComponent });
//   };

//   render() {
//     let changePwForm, paymentForm;
//     if (this.state.showPasswordComponent) {
//       changePwForm = (
//         <form>
//           <TextField
//             id="oldPw"
//             label="Old Password"
//             className={styles.textField}
//             margin="normal"
//           />
//           <TextField
//             id="newPw"
//             label="New Password"
//             className={styles.textField}
//             margin="normal"
//           />
//           <TextField
//             id="confirmPw"
//             label="Confirm Password"
//             className={styles.textField}
//             margin="normal"
//           />
//         </form>
//       );
//     }

//     if (this.state.showPaymentComponent) {
//       paymentForm = <PaymentForm />;
//     }

//     return (
//       <div className={styles.settingsContainer}>
//         <div className={styles.content}>
//           <div className={styles.settingTitle}>Settings</div>
//           <AccountDetails />
//           <Button
//             variant="outlined"
//             onClick={this.handlePasswordBtn}
//             style={custom.settingsBtn}
//           >
//             Change Password
//             {!this.state.showPasswordComponent ? (
//               <ExpandLess />
//             ) : (
//               <ExpandMore />
//             )}
//           </Button>
//           {changePwForm}
//           <Button
//             variant="outlined"
//             onClick={this.handlePaymentBtn}
//             style={custom.settingsBtn}
//           >
//             Payment Details
//             {!this.state.showPaymentComponent ? <ExpandLess /> : <ExpandMore />}
//           </Button>
//           {paymentForm}
//         </div>
//       </div>
//     );
//   }
// }
