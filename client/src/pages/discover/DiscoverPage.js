import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import Axios from "axios";
import DoneeCard from "../../components/userProfile/DoneeCard";
import { history } from "../../helper/history";
import styles from "./discover.module.css";

export default class DiscoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      donees: []
    };
  }

  componentDidMount() {
    this.getUser();
    Axios.get("/donee/")
      .then(res => {
        this.setState({ donees: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  /**
   * The page will redirect to the specific donee page when the user(donor) clicks on that donee's name
   */
  handleDoneeClick = state => {
    console.log(state);
    history.push({
      pathname: state.name,
      state: { doneeID: state.id }
    });
  };

  /**
   * The donee that the user clicks "Save" will be saved to the user Savd donees list
   */
  handleSaveClick = state => {
    // get the user and update the savedDoneesID
    if (this.state.user != null) {
      if (this.state.user.savedDoneesID.indexOf(state.id, 0) === -1) {
        this.state.user.savedDoneesID.push(state.id);
        this.setState({ user: this.state.user });
        console.log(this.state.user);

        Axios.put("update/" + this.state.user.email, this.state.user).then(
          res => {
            console.log(res.data);
          }
        );
      }
    }
  };

  async getUser() {
    const profile = AuthService.getProfile();
    try {
      const res = await Axios.get("/" + profile.email);
      const data = res.data;
      this.setState({ loading: false, user: data });
    } catch (e) {
      console.log(e);
    }
  }

  isDoneeSaved = donee => {
    return (
      this.state.user !== null &&
      this.state.user.savedDoneesID != null &&
      this.state.user.savedDoneesID.indexOf(donee._id, 0) !== -1
    );
  };

  render() {
    const cardContent = this.state.donees.map(donee => {
      const progressWidth = (donee.funded / donee.monthlyDonationLimit) * 100;
      return (
        <DoneeCard
          key={donee._id}
          id={donee._id}
          donee={donee}
          handleDoneeClick={this.handleDoneeClick}
          handleButtonClick={this.handleSaveClick}
          btnText={this.isDoneeSaved(donee) ? "Saved" : "Save"}
          progressWidth={progressWidth}
        />
      );
    });
    return <div className={styles.doneesContainer}>{cardContent}</div>;
  }
}
