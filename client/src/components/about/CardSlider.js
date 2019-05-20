import React, { Component } from "react";
import UserStoryCards from "./UserStoryCards";
import { IconButton, Icon } from "@material-ui/core";
import styles from "./cardSlider.module.css";

export default class CardSlider extends Component {
  state = {
    displayedCard: 0,
    cards: this.props.cards
  };

  handleLeft = () => {
    let { displayedCard } = this.state;
    if (displayedCard > 0) {
      displayedCard--;
    }
    this.setState({ displayedCard });
  };

  handleRight = () => {
    let { displayedCard, cards } = this.state;
    if (displayedCard < cards.length - 1) {
      displayedCard++;
    }
    this.setState({ displayedCard });
  };

  render() {
    const { displayedCard, cards } = this.state;
    let card = (
      <UserStoryCards
        author={cards[displayedCard].author}
        content={cards[displayedCard].content}
      />
    );

    return (
      <div>
        {card}
        <div className={styles.navBtns}>
          <IconButton variant="outlined" onClick={this.handleLeft}>
            <Icon>arrow_back</Icon>
          </IconButton>
          <IconButton variant="outlined" onClick={this.handleRight}>
            <Icon>arrow_forward</Icon>
          </IconButton>
        </div>
      </div>
    );
  }
}
