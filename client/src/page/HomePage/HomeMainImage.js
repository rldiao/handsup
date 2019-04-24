import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { StringDecoder } from "string_decoder";
// import "typeface-roboto";

const styles = {
  card: {
    position: "relative"
  },

  media: {
    paddingTop: "50%"
  },

  overlay: {
    position: "absolute",
    top: "30%",
    left: "10%"
  },

  button: {
    marginTop: "5%",
    backgroundColor: "#324516",
    color: "white",
    fontFamily: ["open-sans", "sans-serif"],
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.125vw"
  },

  typography: {
    fontFamily: ["flood-std", "sans-serif"],
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "3.5vw",
    align: "left",
    color: "white"
  }
};

function MediaCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={require("../../assets/img/people-850097_1920.jpg")}
      />

      <div style={styles.overlay}>
        <Typography className={classes.typography}>
          CONNECT.
          <br />
          GIVE.
          <br />
          LOVE.
        </Typography>

        {/* TODOS: Change the implementation of onClick (navigate somewhere) */}
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            console.log("onClick");
          }}
        >
          Donate Now
        </Button>
      </div>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
