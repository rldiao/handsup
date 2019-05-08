import React, { Component, Fragment } from "react";
import styles from "./doneeProfile.module.css";
import DoneePost from "./DoneePost";
import NewPost from "./NewPost";
import axios from "axios";
import authService from "../../services/AuthService";

const data = {
  title: "Hello World",
  date: "11/11/11",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur architecto corporis vel soluta tempora, eius nobis aspernatur ea praesentium odit."
};

export class DoneePostTab extends Component {
  state = {
    loading: true,
    posts: [],
    newPostContent: "",
    user: null
  };

  componentDidMount() {
    // Load posts here:
    this.setState({ loading: false });
    // axios.get("/user/" + authService.getProfile.email).then()
  }

  submitNewPost = () => {
    // Send new post to post api
    alert("Submit new post: " + this.state.newPostContent);
    let today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    // axios.post("/posts/newPost", () => {}).then(res => { alert("Success")}).catch(res=>{ alert("Fail")})
  };

  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    console.log(this.props.data);
    return (
      <Fragment>
        <NewPost
          submitNewPost={this.submitNewPost}
          handleChange={this.handleChange}
        />
        <DoneePost title={data.title} date={data.date} content={data.content} />
      </Fragment>
    );
  }
}

export default DoneePostTab;
