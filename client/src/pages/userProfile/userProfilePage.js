import React, {Component} from "react";
import MainSection from "../../components/userProfile/MainSection";
import SavedDonees from "../../components/userProfile/SavedDonees";
import styles from "./profile.module.css";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router-dom';


class userProfilePage extends Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path='./userProfileSettings';
        this.props.history.push(path);
    }

    render() {
        return (
            <div className={styles.userProfileContainer}>
                <div className={styles.editProfileButton}>
                    <Button variant="outlined"
                            onClick={this.routeChange}
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
                <MainSection/>
                <SavedDonees/>
            </div>
        )
    }
}

export default withRouter(userProfilePage);