import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import DoneeAbout from "./DoneeAbout";
import DoneeMakeUpdate from "./DoneeMakeUpdate";
import DoneePost from "./DoneePost";

import styles from "./doneeProfile.module.css";
import { styles as custom } from "./doneeProfile.style";

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class DoneeNavTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      newUpdate: false
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleCancelClick = () => {
    this.setState({ newUpdate: false });
  };

  handleNewUpdateClick = () => {
    this.setState({ newUpdate: true });
  };

  render() {
    const { value } = this.state;

    let updatePage = this.state.newUpdate ? (
      <DoneeMakeUpdate handleCancelClick={this.handleCancelClick} />
    ) : (
      <DoneePost handleNewUpdateClick={this.handleNewUpdateClick} />
    );

    console.log(this.state.newUpdate);

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
        {value === 0 && (
          <TabContainer>
            <DoneeAbout />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>{updatePage}</TabContainer>}
      </NoSsr>
    );
  }
}

DoneeNavTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DoneeNavTab);
