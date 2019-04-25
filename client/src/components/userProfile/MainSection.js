import React, {Component} from "react";
import styles from "./userProfile.module.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';

const user = {
    name: "Zachary Ho",
    profilePicture: "https://www.w3schools.com/howto/img_avatar.png"
};

export default class MainSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }

    }

    // componentDidMount() {
    //     Axios.get()
    //         .then(res => {
    //             this.setState({user: res.data})
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // }




    render() {

        return (
            <div className={styles.profileContainer}>
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