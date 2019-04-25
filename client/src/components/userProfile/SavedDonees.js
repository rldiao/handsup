import React, {Component} from 'react';
import styles from "./userProfile.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent"
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

const donees = [
    {name: "Pikachu",
        bio: "Hi, I need money just cos. Please help me achieve my goals. You can share it all " +
            "on Facebook to show your friends and you’ll look like a good guy for donating money.",
        image: "http://clipart-library.com/images/rcnrepMLi.jpg",
        monthlyDonationLimit: 1500,
        funded: 500,
        location: "Melbourne",
        monthlyRenewalDate: "10/05/2019"
    },
    {name: "Cute Pikachu",
        bio: "Hi, I need money just cos. Please help me achieve my goals. You can share it all " +
            "on Facebook to show your friends and you’ll look like a good guy for donating money.",
        image: "http://img4.07net01.com/upload/images/2017/03/15/46080150901182.jpeg",
        monthlyDonationLimit: 1500,
        funded: 400,
        location: "Melbourne",
        monthlyRenewalDate: "10/05/2019"
    },
    {name: "Charmander",
        bio: "Hi, I need money just cos. Please help me achieve my goals. You can share it all " +
            "on Facebook to show your friends and you’ll look like a good guy for donating money.",
        image: "http://jy.sccnn.com/zb_users/upload/2017/03/remoteimage2_20170310111615_38927.jpeg",
        monthlyDonationLimit: 1500,
        funded: 700,
        location: "Melbourne",
        monthlyRenewalDate: "10/05/2019"
    },
    {name: "Cat",
        bio: "Hi, I need money just cos. Please help me achieve my goals. You can share it all " +
            "on Facebook to show your friends and you’ll look like a good guy for donating money.",
        image: "http://5b0988e595225.cdn.sohucs.com/images/20170901/5393dba313224e47ba86a02e5f2e2d21.jpeg",
        monthlyDonationLimit: 1500,
        funded: 1000,
        location: "Melbourne",
        monthlyRenewalDate: "10/05/2019"
    },

];

export default class SavedDonees extends Component {
    constructor() {
        super();
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
        const cardContent = donees.map(donee => {
            const progressWidth = (donee.funded/donee.monthlyDonationLimit)*100;
            const progressStyle = {
               };

            return <Card className={styles.doneesCard}
                         style={{
                             width: "300px",
                             height: "410px",
                             marginRight: "70px",
                             marginBottom: "30px"
                         }}>
                <img className={styles.doneePicture}
                     alt="Donee's Picture"
                     src={donee.image}/>
                <CardContent>
                    <CardActionArea>
                        <Typography gutterBottom variant="h6" component="h3">
                            {donee.name}
                        </Typography>
                    </CardActionArea>
                    <Typography component="p">
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