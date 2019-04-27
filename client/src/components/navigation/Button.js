import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.link} className={styles.navButtonLink}>
          <div>{this.props.text}</div>
        </Link>
      </div>
    );
  }
}

export default Button;
