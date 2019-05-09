import React, { Component, Fragment } from "react";
import MainInfo from "../../components/doneeProfile/MainInfo";
import EditDoneeProfile from "../../components/doneeProfile/EditDoneeProfile";
import DoneeAbout from "../../components/doneeProfile/DoneeAbout";
import Axios from "axios";

export default class DoneePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donee: null,
      loading: true,
      editProfile: false
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

  handleEditProfileClick = () => {
    this.setState({editProfile: true});
  };

  handleExitEditingClick = () => {
    this.setState({editProfile: false});
  };

  


  render() {
    if (!this.state.loading) {
      const editDoneeProfile = <EditDoneeProfile donee={this.state.donee} handleCancelClick={this.handleExitEditingClick}
      handleSaveClick={this.handleExitEditingClick}/>;
      const doneeAbout = <DoneeAbout donee={this.state.donee} handleEditProfileClick={this.handleEditProfileClick}/>;

      return (
        <Fragment>
          <div>
            <MainInfo donee={this.state.donee}/>
          </div>
          {this.state.editProfile ? editDoneeProfile : doneeAbout}
        </Fragment>
      );
    }
    return <Fragment />;
  }
}




