import React, { Component } from "react";
import styles from "./footer.module.css";
import { TextField, Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h4>Join Us</h4>
            <ul>
              <li>Donor</li>
              <li>Donee</li>
              <li>Career</li>
            </ul>
          </div>
          <div className={styles.gridItem}>
            <h4>Resources</h4>
            <ul>
              <li>Housing Service</li>
              <li>Food Service</li>
              <li>Mental Health</li>
            </ul>
          </div>
          <div className={styles.gridItem}>
            <h4>About</h4>
            <ul>
              <li>Our Mission</li>
              <li>The Team</li>
            </ul>
          </div>
          <div className={styles.gridItem}>
            <h4>Connect</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Volunteering</li>
            </ul>
          </div>
          <div id={styles.newsletter} className={styles.gridItem}>
            <h4>Join our newsletter</h4>
            <div className={styles.inputField}>
              <input placeholder="Email Address" type="email" />
              <Button
                onClick={() => {
                  alert(
                    "Thanks for joining!\nWe don't actually have a newsletter..."
                  );
                }}
              >
                Join
              </Button>
            </div>
          </div>
        </div>
        <div id={styles.legal}>
          &copy; 2019 HandsUp &middot; This site is created for info30005
        </div>
      </footer>
    );
  }
}

export default Footer;
