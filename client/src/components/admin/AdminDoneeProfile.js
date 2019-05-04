import React, { Component } from "react";

import styles from "./admin.module.css";

const donee = {
  name: "Zachary Ho",
  gender: "Male",
  nationality: "Malaysian",
  location: "Melbourne",
  dob: "18/11/97",
  monthlyDonationLimit: "$2000",
  funded: "$1000",
  bio: "I need money support",
  profilePic:
    "https://images.unsplash.com/photo-1556492721-d9b051557498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
};

export default class AdminDoneeProfile extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      gender: "",
      nationality: "",
      location: "",
      dob: ""
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.img} alt="" src={donee.profilePic} />
        <div className={styles.cell}>
          <label className={styles.content}>Name :</label>
          {" " + donee.name}
        </div>
        <div className={styles.cell}>
          <label className={styles.content}>Nationality :</label>
          {" " + donee.nationality}
        </div>
        <div className={styles.cell} />
      </div>
    );
  }
}
