import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function AuthedNavItems() {
  return (
    <div className={styles.navButtons}>
      <Link to="/" className={styles.navButton}>
        <div className={styles.navButtonItem}>BTN-1</div>
      </Link>
      <Link to="/" className={styles.navButton}>
        <div className={styles.navButtonItem}>BTN-2</div>
      </Link>
    </div>
  );
}
