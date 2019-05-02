import React, { Component, Fragment } from "react";
import styles from "./userProfile.module.css";
import AuthService from "../../services/AuthService";
import DoneeCard from "./DoneeCard";
import Axios from "axios";

export default class SavedDonees extends Component {
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

  handleDoneeClick = event => {
    console.log(event);
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
    Axios.put("/user/update/" + this.state.user.email, this.state.user);
    this.forceUpdate();
  };

  render() {
    const cardContent = this.state.donees.map(donee => {
      //   const progressWidth = (donee.funded / donee.monthlyDonationLimit) * 100;

      return (
        <DoneeCard
          key={donee._id}
          id={donee._id}
          donee={donee}
          //   handleDoneeClick={this.handleDoneeClick}
          handleButtonClick={this.handleRemoveClick}
          btnText="Remove"
        />
      );
    });

    return (
      <Fragment>
        <div>
          <p className={styles.savedDoneesHeader}>Saved Donees</p>
        </div>
        <div className={styles.cardContainer}>{cardContent}</div>
      </Fragment>
    );
  }
}
