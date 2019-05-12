import React, { Component, Fragment } from "react";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";
import styles from "./homePage.module.css";
import { Button } from "@material-ui/core";
import { userTypeConstants } from "../../constants";
import NewPost from "../../components/doneeProfile/NewPost";
import Axios from "axios";
import AuthService from "../../services/AuthService";
import DoneePost from "../../components/doneeProfile/DoneePost";

class HomePage extends Component {
  state = {
    // Donee stuff
    newPostTitle: "",
    newPostContent: "",
    donee: null,
    posts: []
  };

  componentDidMount() {
    if (this.props.userType === userTypeConstants.DONEE) {
      this.loadDonee();
    }
  }

  loadDonee = () => {
    const id = AuthService.getProfile().id;
    Axios.get("/donee/" + id)
      .then(res => {
        this.setState({ donee: res.data });
      })
      .then(() => {
        this.state.donee.postIDs.forEach(postID => {
          if (postID === null || postID === "") {
            return;
          }
          Axios.get("/post/" + postID).then(res => {
            let temp = this.state.posts;
            temp.push(res.data);
            this.setState({ posts: temp });
          });
        });
      });
  };

  handleNewPost = () => {
    alert("New Post");
  };

  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  handleClearClick = () => {
    this.setState({ newPostTitle: "", newPostContent: "" });
  };

  handleSubmit = () => {
    // Send new post to post api
    let today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    let newPostID;

    Axios.post("/post/new", {
      title: this.state.newPostTitle,
      createDate: date,
      content: this.state.newPostContent
    })
      .then(res => {
        let temp = this.state.donee;
        temp.postIDs.push(res.data._id);
        this.setState({ donee: temp });
        newPostID = res.data._id;
        Axios.put("/donee/updatePostID/" + this.state.donee._id, {
          postID: newPostID
        });
        let tempPosts = this.state.posts;
        tempPosts.push({
          title: res.data.title,
          createDate: res.data.createDate,
          content: res.data.content
        });
        this.setState({ posts: tempPosts });
      })
      .then(() => {
        this.handleClearClick();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { userType } = this.props;
    let { newPostTitle, newPostContent } = this.state;

    let content = (
      <Fragment>
        {/* Placeholder Items */}
        <Button onClick={this.props.logout} color="primary" variant="contained">
          Logout
        </Button>
      </Fragment>
    );

    // If User is a donee
    if (userType === userTypeConstants.DONEE) {
      let doneePost;
      if (this.state.donee !== null) {
        doneePost = this.state.posts.map(post => {
          return (
            <DoneePost
              key={post._id}
              title={post.title}
              date={post.createDate}
              content={post.content}
            />
          );
        });
      }
      content = (
        <Fragment>
          <NewPost
            handleChange={this.handleChange}
            titleValue={newPostTitle}
            contentValue={newPostContent}
            handleClearClick={this.handleClearClick}
            submitNewPost={this.handleSubmit}
          />
          {doneePost}
        </Fragment>
      );
    }
    return (
      <div className={styles.pageContainer}>
        <h2>Your Home</h2>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.auth.userType
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(HomePage);
