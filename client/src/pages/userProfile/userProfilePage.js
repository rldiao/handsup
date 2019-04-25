import React, {Component} from "react";
import MainSection from "../../components/userProfile/MainSection";
import SavedDonees from "../../components/userProfile/SavedDonees";

export default class userProfilePage extends Component {
    render() {
        return (
            <div>
                <MainSection/>
                <SavedDonees/>
            </div>
        )
    }
}