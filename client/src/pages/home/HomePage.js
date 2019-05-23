import React, { Component, Fragment } from "react";
import { logout } from "../../actions/userActions";
import { connect } from "react-redux";
import styles from "./homePage.module.css";
import { userTypeConstants } from "../../constants";
import NewPost from "../../components/doneeProfile/NewPost";
import Axios from "axios";
import AuthService from "../../services/AuthService";
import DoneePost from "../../components/doneeProfile/DoneePost";
import { sortBy } from "lodash";

class HomePage extends Component {
  state = {
    // Donee stuff
    newPostTitle: "",
    newPostContent: "",
    donee: null,
    donor: null,
    posts: [],
    savedDoneePosts: []
  };

  componentDidMount() {
    if (this.props.userType === userTypeConstants.DONEE) {
      this.loadDonee();
    } else if (this.props.userType === userTypeConstants.DONOR) {
      this.loadDonor();
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
            const post = res.data;
            temp.push(post);
            this.setState({ posts: temp });

            let sortPosts = sortBy(this.state.posts, "createDate").reverse();
            this.setState({ posts: sortPosts });
          });
        });
      });
  };

  loadDonor = () => {
    const email = AuthService.getProfile().email;
    console.log("email = " + email);
    Axios.get("/user/" + email)
      .then(res => {
        this.setState({ donor: res.data });
        console.log("donor = " + this.state.donor);
      })
      .then(() => {
        this.state.donor.savedDoneesID.forEach(savedDoneeID => {
          if (savedDoneeID === null || savedDoneeID === "") {
            return;
          }
          Axios.get("/donee/" + savedDoneeID)
            .then(res => {
              this.setState({ donee: res.data });
              console.log("donee = " + this.state.donee);
            })
            .then(() => {
              this.state.donee.postIDs.forEach(postID => {
                if (postID === null || postID === "") {
                  return;
                }
                Axios.get("/post/" + postID).then(res => {
                  let temp = this.state.savedDoneePosts;
                  const savedDoneePost = res.data;
                  temp.push(savedDoneePost);
                  this.setState({ savedDoneePosts: temp });

                  let sortSavedDoneePosts = sortBy(
                    this.state.savedDoneePosts,
                    "createDate"
                  ).reverse();
                  this.setState({ savedDoneePosts: sortSavedDoneePosts });
                });
              });
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
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const dt = new Date();
    const date =
      monthNames[dt.getMonth()] +
      " " +
      dt.getDate() +
      ", " +
      dt.getFullYear() +
      " " +
      dt.getHours() +
      ":" +
      dt.getMinutes() +
      ":" +
      dt.getSeconds();

    let newPostID;

    Axios.post("/post/new", {
      title: this.state.newPostTitle,
      createDate: date,
      authorID: this.state.donee._id,
      author: this.state.donee.name,
      content: this.state.newPostContent
    })
      .then(res => {
        let temp = this.state.donee;
        temp.postIDs.push(res.data._id);
        this.setState({ donee: temp });
        newPostID = res.data._id;
        Axios.put("/donee/new_post/" + this.state.donee._id, {
          postID: newPostID
        });
        let tempPosts = this.state.posts;
        tempPosts.push({
          title: res.data.title,
          authorID: res.data.authorID,
          author: this.state.donee.author,
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
    let doneePost, content;

    // If User is Donee render
    if (userType === userTypeConstants.DONEE) {
      if (this.state.donee !== null) {
        let posts = this.state.posts;
        doneePost = posts.map(post => {
          return (
            <DoneePost
              key={post._id}
              _id={post._id}
              title={post.title}
              date={post.createDate}
              authorID={post.authorID}
              author={post.author}
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
      // User is Donor Render
    } else if (userType === userTypeConstants.DONOR) {
      if (this.state.donor !== null) {
        let savedDoneePosts = this.state.savedDoneePosts;
        doneePost = savedDoneePosts.map(savedDoneePost => {
          return (
            <DoneePost
              key={savedDoneePost._id}
              _id={savedDoneePost._id}
              title={savedDoneePost.title}
              date={savedDoneePost.createDate}
              authorID={savedDoneePost.authorID}
              author={savedDoneePost.author}
              content={savedDoneePost.content}
            />
          );
        });
        if (doneePost.length === 0) {
          doneePost = (
            <Fragment>
              <h3>Oops! Your saved donees do not have any post yet...</h3>
              <img
                className={styles.noPosts}
                alt="no posts"
                src={require("../../assets/img/home/undraw_unexpected_friends_tg6k.svg")}
              />
            </Fragment>
          );
        }
      }
      content = <Fragment>{doneePost}</Fragment>;
    }
    return (
      <div className={styles.pageContainer}>
        <h1>Your Home</h1>
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
