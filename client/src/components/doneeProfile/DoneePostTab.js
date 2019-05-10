import React, { Component, Fragment } from "react";
import styles from "./doneeProfile.module.css";
import DoneePost from "./DoneePost";
import NewPost from "./NewPost";
import Axios from "axios";
import AuthService from "../../services/AuthService";

const data = {
  title: "Hello World",
  date: "11/11/11",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur architecto corporis vel soluta tempora, eius nobis aspernatur ea praesentium odit."
};

export class DoneePostTab extends Component {
  state = {
    loading: true,
    postIDs: [],
    newPostTitle: "",
    newPostContent: "",
    user: null
  };

  componentDidMount() {
    // Load posts here:
    this.setState({ loading: false });

    const profile = AuthService.getProfile();

    Axios.get("/user/" + profile.email)
      .then(res => {
        this.setState({ user: res.data });
        this.setState({ postIDs: this.state.user.postIDs });
        this.state.user.postIDs.forEach(postID => {
          Axios.get("/post/" + postID).then(res => {
            let temp = this.state.postIDs;
            temp.push(res.data);
            this.setState({ postIDs: temp });
          });
        });
      })
      .catch(e => {
        console.log("Error: " + e);
      });

    // Axios.get("/post").then(res => {
    //   let temp = res.data;
    //   this.setState({ posts: temp });
    // });
  }

  submitNewPost = async () => {
    // Send new post to post api
    let today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    let newPostID;

    try {
      newPostID = await Axios.post("/post/new", {
        title: this.state.newPostTitle,
        createDate: date,
        content: this.state.newPostContent
      }).then(res => {
        return res.data._id;
      });
      await Axios.put("/donee/updatePostID/" + this.state.user._id, newPostID);
    } catch (error) {
      console.log(error);
    }
  };

  handleClearClick = () => {
    this.setState({ newPostTitle: "", newPostContent: "" });
  };

  handleTitleChange = title => e => {
    this.setState({ [title]: e.target.value });
  };

  handleContentChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const doneePost = this.state.postIDs.map(post => {
      return (
        <DoneePost
          key={post._id}
          title={post.title}
          date={post.createDate}
          content={post.content}
        />
      );
    });

    // console.log(this.props.data);
    return (
      <Fragment>
        <NewPost
          submitNewPost={this.submitNewPost}
          handleContentChange={this.handleContentChange}
          handleTitleChange={this.handleTitleChange}
          contentValue={this.state.newPostContent}
          titleValue={this.state.newPostTitle}
          handleClearClick={this.handleClearClick}
        />
        {doneePost}
        {/* <DoneePost title={data.title} date={data.date} content={data.content} /> */}
      </Fragment>
    );
  }
}

export default DoneePostTab;
