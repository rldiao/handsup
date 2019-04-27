import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'

import logo from '../../assets/img/FooterLogo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: '#fefefe',
    borderTop: 'solid 1px #000000'
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  subFooterText: {
    fontSize: '10px',
    padding: '5px',
    margin: '5px'
  },
  subHeader: {
    marginTop: '20px',
    color: '#41521F',
    padding: '5px',
    fontSize:'1rem'
  },
  linkText: {
    color: '#171717',
    padding: '5px',
    fontSize: '0.85rem'
  },
  image: {
    marginTop:'20px',
  },
  copyrightText: {
    marginRight:'10px',
  }
});

class Footer extends Component {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={4}>
              <img className={classes.image}
                src={logo}
                alt="Logo"
              /> 
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.subHeader} >About</Typography>
            <Typography className={classes.linkText}>Our story</Typography>
            <Typography className={classes.linkText}>The founders</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.subHeader}>Discover</Typography>
            <Typography className={classes.linkText}>Our donees</Typography> 
            <Typography className={classes.linkText}>Volunteer</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.subHeader}>Contact</Typography>
            <Typography className={classes.linkText}>Email Us</Typography>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
        <Grid container className={classes.subFooter}>
          <Grid item xs={1}>
          </Grid>
          <Grid container direction="row" item xs={11}>
            <Grid item>
              <Typography className={`${classes.subFooterText} ${classes.copyrightText}`}>Copyright 2019, DaWebBois.</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subFooterText}>Terms</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subFooterText}>Privacy</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subFooterText}>Legal</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);