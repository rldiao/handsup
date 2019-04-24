import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    position: "relative",
    maxWidth: "100%"
  },

  overlay: {
    position: "absolute",
    top: "5%",
    left: "55%"
  },

  fstMedia: {
    padding: "22% 16%",
    margin: "5% 75% 5% 8%",
    borderRadius: "5%"
  },

  sndMedia: {
    padding: "22% 15%",
    margin: "5% 8% 5% 60%",
    borderRadius: "5%"
  },

  heading: {
    fontFamily: ["raleway", "sans-serif"],
    fontWeight: 800,
    fontStyle: "normal"
  },

  leftIcon: {
    marginTop: "10%",
    fontSize: "4vw"
  },

  rightIcon: {
    marginTop: "10%",
    paddingLeft: "50%",
    fontSize: "4vw"
  },

  leftSubHeading: {
    width: "70%"
  },

  rightSubHeading: {}
};

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
    </Grid>
    // <Card className={classes.card}>
    //   <CardMedia
    //     className={classes.fstMedia}
    //     image={require("../../assets/img/isaac-mehegan-747227-unsplash.jpg")}
    //   />

    //   {/* // TODOS: div need to increase size */}
    //   <div style={styles.overlay}>
    //     <Typography className={classes.heading} style={{ fontSize: "2.5vw" }}>
    //       Our Core Values
    //     </Typography>
    //     <br />
    //     <Icon className={classes.leftIcon} color="primary">
    //       accessibility_new
    //     </Icon>
    //     <Icon className={classes.rightIcon} color="primary">
    //       accessibility
    //     </Icon>
    //     <br />
    //     <Typography
    //       className={[classes.heading, classes.leftSubHeading]}
    //       style={{ fontSize: "1.25vw" }}
    //     >
    //       Stay open-minded
    //     </Typography>
    //     <Typography
    //       className={[classes.heading, classes.rightContent]}
    //       variant="subtitle1"
    //     >
    //       Stay open-minded
    //     </Typography>
    //   </div>

    //   <CardMedia
    //     className={classes.sndMedia}
    //     image={require("../../assets/img/diego-ph-249471-unsplash.jpg")}
    //     // style={{ margin: "5% 8% 5% 75%" }}
    //   />
    // </Card>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
