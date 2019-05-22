import React, { Component, Fragment } from "react";
import styles from "./userProfile.module.css";
import AuthService from "../../services/AuthService";
import DoneeCard from "./DoneeCard";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { history } from "../../helper/history";

class SavedDonees extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      donees: [],
      savedDonees: []
    };
  }

  componentDidMount() {
    const profile = AuthService.getProfile();
    Axios.get("/user/" + profile.email)
      .then(res => {
        this.setState({ user: res.data });
        this.setState({ savedDonees: this.state.user.savedDoneesID });
        this.state.user.savedDoneesID.forEach(doneeID => {
          if (doneeID === "") {
            // MongoDB issue as array is initalized as [""]
            return;
          }
          Axios.get("/donee/" + doneeID).then(res => {
            let temp = this.state.donees;
            temp.push(res.data);
            this.setState({ donees: temp });
          });
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleDoneeClick = state => {
    history.push("/user/" + state.email);
  };

  handleRemoveClick = state => {
    this.state.donees.forEach((value, index) => {
      if (value._id === state.id) {
        this.state.donees.splice(index, 1);
      }
    });
    this.state.user.savedDoneesID.forEach((id, index) => {
      if (id === state.id) {
        this.state.user.savedDoneesID.splice(index, 1);
      }
    });
    Axios.put("/user/update/" + this.state.user.email, this.state.user).then(
      res => {
        console.log(res.data);
      }
    );
    this.forceUpdate();
  };

  render() {
    let cardContent = (
      <div className={styles.cardContainer}>
        {this.state.donees.map(donee => {
          const progressWidth =
            (donee.funded / donee.monthlyDonationLimit) * 100;
          return (
            <DoneeCard
              key={donee._id}
              id={donee._id}
              donee={donee}
              handleDoneeClick={this.handleDoneeClick}
              handleButtonClick={this.handleRemoveClick}
              btnText="Remove"
              progressWidth={progressWidth}
            />
          );
        })}
      </div>
    );

    if (this.state.donees.length === 0) {
      cardContent = (
        <div className={styles.noSavedDonees}>
          <h3>
            Oops! You don't have any saved donee. Browse in discover and find
            your donees!
          </h3>
          <img
            className={styles.noDoneeImg}
            alt="No saved donees"
            src={require("../../assets/img/savedDonee/undraw_empty_xct9.svg")}
          />
        </div>
      );
    }

    return (
      <Fragment>
        <div>
          <p className={styles.savedDoneesHeader}>Saved Donees</p>
        </div>
        {cardContent}
      </Fragment>
    );
  }
}

export default withRouter(SavedDonees);
