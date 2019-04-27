import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AccountTab from "./AccountTab";
import EditProfileTab from "./EditProfileTab";
import PaymentForm from "./PaymentForm";

import styles from "./profileSettings.module.css";

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

// function LinkTab(props) {
//   return (
//     <Tab component="a" onClick={event => event.preventDefault()} {...props} />
//   );
// }

class NavTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
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
            <Tab label="Account" style={{ textTransform: "initial" }} />
            <Tab label="Edit Profile" style={{ textTransform: "initial" }} />
            <Tab label="Payment Methods" style={{ textTransform: "initial" }} />
          </Tabs>
        </Paper>
        {value === 0 && (
          <TabContainer>
            <AccountTab />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <EditProfileTab />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <PaymentForm />
          </TabContainer>
        )}
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavTabs);
