import React, { Component } from "react";
import styles from "./userProfile.module.css";
import Axios from "axios";
import AuthService from "../../services/AuthService";
import zachProfilePic from "../../assets/img/profilepic.jpg";

export default class MainSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

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

  render() {
    let name;
    let pic;
    if (!this.state.loading) {
      name = this.state.user.name;
      pic = this.state.user.profilePic;
    } else {
      name = "Loading...";
      pic = "https://www.w3schools.com/howto/img_avatar.png";
    }

    // TODO: For submittable 7
    pic = zachProfilePic;

    return (
      <div className={styles.profileContainer}>
        <img className={styles.profileImage} alt="MyProfile" src={pic} />
        <p className={styles.userName}>{name}</p>
      </div>
    );
  }
}
