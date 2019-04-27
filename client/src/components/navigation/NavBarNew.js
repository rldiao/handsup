import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from "./NavBarNew.module.css";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBarNew extends Component {
  constructor() {
    super();
    // this.Auth = new AuthService();
    this.state = {
      loggedIn: false
    };
  }

  // componentWillMount() {
  //   this.setState({ loggedIn: this.Auth.loggedIn() });
  // }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBarNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarNew);