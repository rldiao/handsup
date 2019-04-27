import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
// import { withStyles } from "@material-ui/core/styles";
import styles from "./Button.module.css";

// import styles from "./Button.module.css";

// const styles = {
//   avatar: {
//     margin: 10,
//     width: 50,
//     height: 50
//   }
// };

class ProfileButton extends Component {
  render() {
    // const { classes } = this.props;

    return (
      <div className={styles.navButton}>
        <Link to={this.props.link}>
          <Avatar
            alt={this.props.username}
            src={this.props.source}
            className={styles.avatar}
          />
        </Link>
      </div>
    );
  }
}

// export default withStyles(styles)(ProfileButton);
export default ProfileButton;
