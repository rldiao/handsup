import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import styles from "./aboutPage.module.css";
import { history } from "../../helper/history";
import { stateConstants } from "../../constants/stateConstants";

class AboutPage extends Component {
  handleHelpBtn = () => {
    if (this.props.authState === stateConstants.AUTH) {
      history.push("/discover");
    } else if (this.props.authState === stateConstants.UNAUTH) {
      history.push("/signup");
    }
  };
  render() {
    return (
      <div className={styles.pageContainer}>
        <div id={styles.banner} />
        <div id={styles.mission} className={styles.tileContent}>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            modi maxime! Repellendus hic voluptatem perspiciatis atque, rerum
            amet. Vitae, accusantium.
          </p>
        </div>
        <div id={styles.ourStory} className={styles.tileContent}>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            porro eveniet, exercitationem illum nemo consequuntur repellendus
            nulla minus placeat ea.
          </p>
        </div>
        <div id={styles.callToAction} className={styles.tileContent}>
          <h2>Help Your Community</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, animi!
          </p>
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleHelpBtn}
          >
            Help Now
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: state.auth.state
  };
};

export default connect(mapStateToProps)(AboutPage);
