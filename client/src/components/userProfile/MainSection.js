import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import styles from "./userProfile.module.css";
// import Axios from 'axios';

const user = {
    name: "Zachary Ho",
    profilePicture: "https://www.w3schools.com/howto/img_avatar.png"
};

export default class MainSection extends Component {
    constructor() {
        super();
        // this.state = {
        //     profileImage: "",
        //     name: "",
        //     savedDonees: [],
        //     error: ""
        // }

    }

    // componentDidMount() {
    //     this.getUser();
    //
    // }

    // async getUser() {
    //     try {
    //         let res = await Axios.get("/:email");
    //         console.log("response", res);
    //
    //         let user = res.user;
    //         this.setState({
    //             profileImage: user.profilePic,
    //             name: user.name,
    //             savedDonees: user.savedDoneesID,
    //             error: ""});
    //     } catch (e) {
    //         this.setState({error: `BRUTAL FAILURE: ${e}`});
    //     }
    // }

    render() {
        // if (error.length) {
        //     return (
        //         <div>{this.state.error}</div>
        //     )
        // }
        return (
            <div className={styles.profileContainer}>
                <div className={styles.editProfileButton}>
                    <Button variant="outlined"
                            herf=""
                            style={{
                                fontSize: "10px",
                                backgroundColor: "#FFFFFF",
                                border: "0.5px solid #41521F",
                                color: "#41521F",
                                padding: "5px 20px 5px 20px",
                            }}>
                        Edit Profile
                    </Button>
                </div>
                <img className={styles.profileImage}
                     alt="MyProfile"
                     src={user.profilePicture}/>
                <p className={styles.userName}>
                    {user.name}
                </p>
            </div>
        );

    }
}