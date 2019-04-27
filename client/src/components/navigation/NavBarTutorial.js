import React, { Component } from "react";
import Button from "./Button";
import ProfileButton from "./ProfileButton";

import logo from "../../assets/img/logo_slogan.png";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import profilePicture from "../../assets/img/profilepic.jpg";
import styles from "./NavBarTutorial.module.css";

class NavBarTutorial extends Component {
  constructor() {
    super();
    // this.Auth = new AuthService();
    this.state = {
      loggedIn: false
    };
  }

  // componentWillMount() {
  //   this.setState({ loggedIn: this.Auth.loggedIn() });
  // }

  render() {
    // let navButtons;
    // // console.log(this.state.loggedIn)
    // if (this.state.loggedIn) {
    //   navButtons = <AuthedNavItems />;
    // } else {
    //   navButtons = <UnauthedNavItems />;
    // }

    // return (
    //   <div className={styles.container}>
    //     <div className={styles.logo}>
    //       <img class={styles.image} src={logo} alt="Logo" />
    //     </div>
    //     <div className={styles.spacer} />
    //     <div className={styles.navItems}>
    //       <Button link="/" text="About Us" />
    //       <Button link="/" text="Discover" />
    //       <Button link="/" text="Contact Us" />
    //       <ProfileButton
    //         link="/"
    //         username="Zachary Ho"
    //         source={profilePicture}
    //       />
    //       {/* {navButtons} */}
    //     </div>
    //   </div>
    // );

    return (
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.spacer} />
          <div className={styles.navBarItems}>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Discover</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              {/* <Button link="/" text="About Us" />
              <Button link="/" text="Discover" />
              <Button link="/" text="Contact Us" /> */}
            </ul>
          </div>
          <div>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}

// NavBarNew.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default NavBarTutorial;
