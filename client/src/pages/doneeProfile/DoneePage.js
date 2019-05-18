import React, { Component, Fragment } from "react";
import MainInfo from "../../components/doneeProfile/MainInfo";
// import EditDoneeProfile from "../../components/doneeProfile/EditDoneeProfile";
// import DoneeAbout from "../../components/doneeProfile/DoneeAbout";
import Axios from "axios";
import DoneeNavTab from "../../components/doneeProfile/DoneeNavTab";
import { userTypeConstants } from "../../constants";

export default class DoneePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donee: null,
      loading: true
      // editProfile: false
    };
  }

  componentDidMount() {
    const doneeID = this.props.location.state.doneeID;
    Axios.get("/donee/" + doneeID)
      .then(res => {
        this.setState({ donee: res.data });
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    if (!this.state.loading) {
      return (
        <Fragment>
          <div>
            <MainInfo
              donee={this.state.donee}
              userType={userTypeConstants.DONOR}
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
