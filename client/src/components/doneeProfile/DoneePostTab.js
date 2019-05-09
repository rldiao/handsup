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
    posts: [],
    newPostTitle: "",
    newPostContent: "",
    user: null
  };

  componentDidMount() {
    // Load posts here:
    this.setState({ loading: false });

    const profile = AuthService.getProfile();

    // TODO: get through user to get the post
    // Axios.get("/user/" + profile.email)
    //   .then(res => {
    //     this.setState({ user: res.data });
    //     this.setState({ postsID: this.state.user.postsID });
    //     this.state.user.postsID.forEach(postID => {
    //       Axios.get("/post/" + postID).then(res => {
    //         let temp = this.state.posts;
    //         temp.push(res.data);
    //         this.setState({ posts: temp });
    //       });
    //     });
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });

    Axios.get("/post").then(res => {
      let temp = res.data;
      this.setState({ posts: temp });
    });
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

    Axios.post("/post/new", {
      title: this.state.newPostTitle,
      createDate: date,
      content: this.state.newPostContent
    })
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        alert("Fail");
      });
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
    const doneePost = this.state.posts.map(post => {
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
