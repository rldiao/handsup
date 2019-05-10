// import React, { Component, Fragment } from "react";
// import styles from "./doneeProfile.module.css";
// import DoneePost from "./DoneePost";
// import NewPost from "./NewPost";
// import Axios from "axios";
// import AuthService from "../../services/AuthService";

// export class DoneePostTab extends Component {
//   state = {
//     loading: true,
//     newPostTitle: "",
//     newPostContent: "",
//     posts: [],
//     donee: null
//   };

//   componentDidMount() {
//     // Load posts here:
//     this.setState({ loading: false });
//     this.loadPost();
//   }

//   loadPost = () => {
//     const id = AuthService.getProfile().id;
//     Axios.get("/donee/" + id)
//       .then(res => {
//         this.setState({ donee: res.data });
//       })
//       .then(() => {
//         this.state.donee.postIDs.forEach(postID => {
//           if (postID === null || postID === "") {
//             return;
//           }
//           Axios.get("/post/" + postID).then(res => {
//             let temp = this.state.posts;
//             temp.push(res.data);
//             this.setState({ posts: temp });
//           });
//         });
//       });
//   };

//   submitNewPost = () => {
//     // Send new post to post api
//     let today = new Date();
//     const date =
//       today.getDate() +
//       "-" +
//       (today.getMonth() + 1) +
//       "-" +
//       today.getFullYear();

//     let newPostID;

//     Axios.post("/post/new", {
//       title: this.state.newPostTitle,
//       createDate: date,
//       content: this.state.newPostContent
//     })
//       .then(res => {
//         let temp = this.state.donee;
//         temp.postIDs.push(res.data._id);
//         this.setState({ donee: temp });
//         newPostID = res.data._id;
//         Axios.put("/donee/updatePostID/" + this.state.donee._id, {
//           postID: newPostID
//         });
//         let tempPosts = this.state.posts;
//         tempPosts.push({
//           title: res.data.title,
//           createDate: res.data.createDate,
//           content: res.data.content
//         });
//         this.setState({ posts: tempPosts });
//       })
//       .then(() => {
//         this.handleClearClick();
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   handleClearClick = () => {
//     this.setState({ newPostTitle: "", newPostContent: "" });
//   };

//   handleTitleChange = title => e => {
//     this.setState({ [title]: e.target.value });
//   };

//   handleContentChange = field => e => {
//     this.setState({ [field]: e.target.value });
//   };

//   render() {
//     let doneePost;
//     if (this.state.donee !== null) {
//       doneePost = this.state.posts.map(post => {
//         try {
//           return (
//             <DoneePost
//               key={post._id}
//               title={post.title}
//               date={post.createDate}
//               content={post.content}
//             />
//           );
//         } catch (error) {
//           console.log(error);
//         }
//       });
//     }

//     return (
//       <Fragment>
//         <NewPost
//           submitNewPost={this.submitNewPost}
//           handleContentChange={this.handleContentChange}
//           handleTitleChange={this.handleTitleChange}
//           contentValue={this.state.newPostContent}
//           titleValue={this.state.newPostTitle}
//           handleClearClick={this.handleClearClick}
//         />
//         {doneePost}
//         {/* <DoneePost title={data.title} date={data.date} content={data.content} /> */}
//       </Fragment>
//     );
//   }
// }

// export default DoneePostTab;

import React, { Component, Fragment } from "react";
import styles from "./doneeProfile.module.css";
import Axios from "axios";
import DoneePost from "./DoneePost";

export default class DoneePostTab extends Component {
  state = {
    posts: []
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
    const { donee } = this.props;
    let posts;

    if (this.state.posts.length > 0) {
      posts = this.state.posts.map(post => {
        try {
          return (
            <DoneePost
              key={post._id}
              title={post.title}
              date={post.createDate}
              content={post.content}
            />
          );
        } catch (error) {
          console.log(error);
        }
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
