import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import styles from "./aboutPage.module.css";
import { history } from "../../helper/history";
import { stateConstants } from "../../constants/stateConstants";
import CardSlider from "../../components/about/CardSlider";

const userCards = [
  {
    author: "user1",
    content:
      "HandsUp provided a save environment for me to share my story and receive help."
  },
  {
    author: "user2",
    content: "content2"
  }
];

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
        {/* Photo by Alvin Mahmudov on Unsplash<br />Photo by Mitchell Hollander
          on Unsplash */}
        <img
          id={styles.banner}
          alt="hands reaching down"
          src={require("../../assets/img/aboutPage/val-vesa-624638-unsplash (2).jpg")}
        />
        <div className={styles.pageContent}>
          <div id={styles.mission} className={styles.tileContent}>
            <div>
              <h1>Help Your Local Community</h1>
              <p>
                Help someone in your community today. See the change that you
                can bring to someone's life.
              </p>
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleHelpBtn}
              >
                Help Now
              </Button>
            </div>
            <img
              alt="illusation of two people with a heart between them"
              src={require("../../assets/img/aboutPage/undraw_spread_love_r9jb.png")}
            />
          </div>
          <div id={styles.userStory} className={styles.tileContent}>
            <h2>Local Stories</h2>
            <div className={styles.slideContainer}>
              <CardSlider cards={userCards} />
            </div>
          </div>
          <div id={styles.features} className={styles.tileContent}>
            <div>
              <img
                src={require("../../assets/img/aboutPage/undraw_mobile_login_ikmv.svg")}
                alt="sign up"
              />
              <h4>Create An Account</h4>
              <p>
                Whether you are looking to become a donee or donor, sign up
                quickly for one of our accounts.
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/img/aboutPage/undraw_tabs_jf82.svg")}
                alt="posting stories"
              />
              <h4>Browse Through Stories</h4>
              <p>
                Donees with post their updates online so you can see the impact
                you are making.
              </p>
            </div>
            <div>
              <img
                src={require("../../assets/img/aboutPage/undraw_environment_iaus.svg")}
                alt="growing plant"
              />
              <h4>Help A Person Florish</h4>
              <p>
                You will to making a difference to someone's life. We will make
                sure to let you know your impact
              </p>
            </div>
          </div>
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
