import React, { Component, Fragment } from "react";
import MainInfo from "../../components/doneeProfile/MainInfo";
import Axios from "axios";
import DoneeNavTab from "../../components/doneeProfile/DoneeNavTab";
import { userTypeConstants } from "../../constants";
import DonationDialog from "../../components/donation/DonationDialog";

export default class DoneePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donee: null,
      loading: true,
      // editProfile: false
      donationDialogOpen: false
    };
  }

  componentDidMount() {
    // Handle should be donee email
    const { handle } = this.props.match.params;

    Axios.get("/donee/" + handle)
      .then(res => {
        this.setState({ donee: res.data });
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  handleDonate = () => {
    this.setState({
      donationDialogOpen: !this.state.donationDialogOpen
    });
  };

  handleDonation = donationAmount => {
    // Axios
    let donee = this.state.donee;
    let original_funded = donee.funded;
    let new_funded = parseInt(original_funded) + parseInt(donationAmount);
    donee.funded = new_funded;
    this.setState({
      donee
    });
    Axios.put("/donee/update/" + this.state.donee._id, donee)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log("Donate Error: " + err);
      });
  };

  render() {
    let donationDialog;
    if (this.state.donationDialogOpen) {
      donationDialog = (
        <DonationDialog
          handleDonate={this.handleDonate}
          handleDonation={this.handleDonation}
          donee={this.state.donee}
        />
      );
    }

    if (!this.state.loading) {
      return (
        <Fragment>
          {donationDialog}
          <div>
            <MainInfo
              donee={this.state.donee}
              userType={userTypeConstants.DONOR}
              handleDonate={this.handleDonate}
              handleDonation={this.handleDonation}
            />
          </div>
          {/* {this.state.editProfile ? editDoneeProfile : doneeAbout} */}
          <DoneeNavTab
            donee={this.state.donee}
            userType={userTypeConstants.DONOR}
          />
        </Fragment>
      );
    }
    return <Fragment />;
  }
}
