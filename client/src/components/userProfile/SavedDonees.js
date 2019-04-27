import React, {Component} from 'react';
import styles from "./userProfile.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent"
import Typography from '@material-ui/core/Typography';
import AuthService from "../../services/AuthService";

import Axios from 'axios';

export default class SavedDonees extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            donees: []
        };
        this.handleDoneeClick = this.handleDoneeClick.bind(this);
    }

    componentDidMount() {
        const profile = AuthService.getProfile();
        Axios.get("/"+ profile.email)
            .then(res => {
                this.setState({user: res.data});
                this.state.user.savedDoneesID.map(doneeID => {
                    Axios.get("/donee/"+doneeID)
                        .then(res => {
                            let temp = this.state.donees;
                            temp.push(res.data);
                            this.setState( {donees: temp} );
                        })
                });
                console.log(this.state.donees);
            })
            .catch(e => {
                console.log(e);
            })
    }

    handleDoneeClick() {

    }

    render() {
        const cardContent = this.state.donees.map(donee => {
            const progressWidth = (donee.funded/donee.monthlyDonationLimit)*100;

            return <Card className={styles.doneesCard}
                         style={{
                             width: "300px",
                             height: "410px",
                             marginRight: "70px",
                             marginBottom: "30px"
                         }}>
                <img className={styles.doneePicture}
                     alt="Donee's Picture"
                     src={donee.profilePicture}/>
                <CardContent>
                    <CardActionArea onClick={this.handleDoneeClick()}>
                        <Typography gutterBottom variant="h6"
                                    component="h3">
                            {donee.name}
                        </Typography>
                    </CardActionArea>
                    <Typography component="p"
                    style={{height: "80px"}}>
                        {donee.bio}
                    </Typography>
                    <div className={styles.progress}>
                    </div>

                    <Typography variant="body2">
                        ${donee.funded} funded of ${donee.monthlyDonationLimit}
                    </Typography>
                    <Typography variant="subheading">
                        Until {donee.monthlyRenewalDate}
                    </Typography>
                    <div className={styles.doneeLocation}>
                        <img className={styles.locationIcon}
                             alt="Location Icon"
                             src="http://dawimmigration.com/wp-content/uploads/2015/01/location-24-256.png"/>
                        <Typography component="p">
                            {donee.location}
                        </Typography>
                    </div>

                </CardContent>
            </Card>;
        });

        return (
            <div className={styles.savedDoneesContainer}>
                <div>
                    <p className={styles.savedDoneesHeader}>
                        Saved Donees
                    </p>
                </div>
                <div className={styles.cardContainer}>
                    {cardContent}
                </div>
            </div>
        );
    }
}