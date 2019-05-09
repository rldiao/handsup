import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import { profileStyles } from "../../pages/userProfile/profileStyles";
import { Button, TextField } from "@material-ui/core";
import Axios from "axios";

export default class EditDoneeProfile extends Component {
  constructor() {
    super();

    this.state = {
      location: "",
      bio: "",
      goal: []
    };
  }

  componentDidMount() {
    this.setState({
      location: this.props.donee.location,
      bio: this.props.donee.bio,
      goal: this.props.donee.goal
    });
  }

  handleOnChange = e => {
    const attribute = e.target.name;
    const value = e.target.value;

    if (attribute === "goal") {
      const id = e.target.id;
      let goal;
      goal = this.state.goal;
      goal[id] = value;
      this.setState({ goal: goal });
    } else {
      this.setState({ [attribute]: value });
    }
  };

  handleCancelClick = () => {
    this.props.handleCancelClick();
  };

  handleSaveClick = () => {
    // push the change the database
    let donee;
    donee = this.props.donee;
    donee.location = this.state.location;
    donee.bio = this.state.bio;
    donee.goal = this.state.goal;

    Axios.put("donee/update/" + this.props.donee._id, donee).then(res => {
      console.log(res.data);
    });

    this.props.handleSaveClick();
  };

  render() {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.buttonContainer}>
          <Button
            variant="outlined"
            style={profileStyles.saveButton}
            onClick={this.handleSaveClick}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={this.handleCancelClick}
            style={profileStyles.editProfileButton}
          >
            Cancel
          </Button>
        </div>

        <h2 className={styles.aboutTitle}>Location</h2>

        <input
          type="location"
          id="location"
          name="location"
          defaultValue={this.props.donee.location}
          onChange={this.handleOnChange}
          className={styles.locationInput}
        />

        <h2 className={styles.aboutTitle}>My Story</h2>

        <textarea
          name="bio"
          defaultValue={this.props.donee.bio}
          onChange={this.handleOnChange}
          className={styles.editText}
        />

        <h2 className={styles.aboutTitle}>Goals</h2>

        <ol>
          {this.props.donee.goal.map((goal, i) => (
            <div className={styles.textContainer} key={i}>
              <textarea
                name="goal"
                id={i}
                defaultValue={goal}
                onChange={this.handleOnChange}
                className={styles.editText}
              />
            </div>
          ))}
        </ol>
      </div>
    );
  }
}
