import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import ResizeImage from 'react-resize-image'

import logo from '../../assets/img/logo_slogan.png';


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
  footerText: {
    color: '#171717',
    padding: '5px',
    fontSize:'16px'
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
            <ResizeImage
              src={logo}
              alt="Logo"
              options={{ width: 50 }}
            />           
            {/* <Typography className={classes.footerText}>Hands Up1</Typography>
            <Typography className={classes.footerText}>CONNECT. GIVE. LOVE.</Typography> */}
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.footerText}>About</Typography>
            <Typography className={classes.footerText}>Our story</Typography>
            <Typography className={classes.footerText}>The founders</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.footerText}>Discover</Typography>
            <Typography className={classes.footerText}>Our donees</Typography> 
            <Typography className={classes.footerText}>Volunteer</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.footerText}>Contact</Typography>
            <Typography className={classes.footerText}>Email Us</Typography>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
        <Grid container className={classes.subFooter}>
          <Grid item xs={1}>
          </Grid>
          <Grid container direction="row" item xs={11}>
            <Grid item>
              <Typography className={classes.footerText}>Copyright 2019, DaWebBois.</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerText}>Terms</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerText}>Privacy</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerText}>Legal</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer);