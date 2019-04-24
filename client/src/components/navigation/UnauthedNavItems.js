import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function UnauthedNavItems() {
  return (
    <div className={styles.navButtons}>
      <Link to="/signup" className={styles.navButton}>
        <div className={styles.navButtonItem}>Sign up</div>
      </Link>
      <Link to="/login" className={styles.navButton}>
        <div className={styles.navButtonItem}>Log In</div>
      </Link>
    </div>
  );
}
