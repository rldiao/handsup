import React, { Component, Fragment } from "react";
import AuthService from "../../services/AuthService";
import Axios from "axios";
import DoneeCard from "../../components/userProfile/DoneeCard";
import { history } from "../../helper/history";
import styles from "./discover.module.css";
import { Paper, InputBase, Icon } from "@material-ui/core";
import { IconButton } from "@material-ui/core/es";

export default class DiscoverPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      donees: [],
      searching: false,
      searchingDonee: []
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
    history.push("/user/" + state.email);
  };

  /**
   * The donee that the user clicks "Save" will be saved to the user Savd donees list
   */
  handleSaveClick = state => {
    // get the user and update the savedDoneesID
    if (this.state.user != null) {
      // add the donee to saved donees list if the donee is not in the list
      if (this.state.user.savedDoneesID.indexOf(state.id) === -1) {
        this.state.user.savedDoneesID.push(state.id);
      }
      // remove the donee from the saved donees list if the donee is already in the list
      else {
        let index = this.state.user.savedDoneesID.indexOf(state.id);
        this.state.user.savedDoneesID.splice(index, 1);
      }
      this.setState({ user: this.state.user });
      Axios.put("/user/update/" + this.state.user.email, this.state.user).then(
        res => {
          console.log(res.data);
        }
      );
    }
  };

  async getUser() {
    const profile = AuthService.getProfile();
    try {
      const res = await Axios.get("/user/" + profile.email);
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

  handleSearchOnChange = e => {
    let found = false;
    if (e.target.value !== null) {
      console.log(e.target.value);
      this.setState({ searching: true });
      this.state.donees.forEach(donee => {
        if (donee.name.toLowerCase() === e.target.value.toLowerCase()) {
          this.state.searchingDonee.push(donee);
          found = true;
        }
      });
    }
    if (found === false && e.target.value === "") {
      this.setState({ searching: false, searchingDonee: [] });
    }
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

    const searchingDonee = this.state.searchingDonee.map(donee => {
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
    return (
      <Fragment>
        <div className={styles.searchBarContainer}>
          <Paper style={{ display: "flex" }} elevation={1}>
            <IconButton aria-label="Search">
              <Icon>search</Icon>
            </IconButton>

            <InputBase
              name="doneeName"
              onChange={this.handleSearchOnChange}
              fullWidth
              placeholder="Search donee"
            />
          </Paper>
        </div>
        <div className={styles.doneesContainer}>
          {this.state.searching ? searchingDonee : cardContent}
        </div>
      </Fragment>
    );
  }
}
