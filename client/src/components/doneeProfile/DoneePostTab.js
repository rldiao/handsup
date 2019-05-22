import React, { Component } from "react";
import styles from "./doneeProfile.module.css";
import Axios from "axios";
import DoneePost from "./DoneePost";

export default class DoneePostTab extends Component {
  state = {
    posts: [],
    donee: null
  };

  componentDidMount() {
    this.loadPost();
  }

  loadPost = () => {
    const id = this.props.donee._id;
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

  render() {
    let posts;

    if (this.state.posts.length > 0) {
      posts = this.state.posts.map(post => {
        return (
          <DoneePost
            key={post._id}
            title={post.title}
            date={post.createDate}
            content={post.content}
          />
        );
      });
    } else {
      posts = <div>No Posts</div>;
    }
    return (
      <div className={styles.tabContainerGrid}>
        <h1>Posts</h1>
        {posts}
      </div>
    );
  }
}
