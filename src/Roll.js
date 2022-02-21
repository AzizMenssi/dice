import React, { Component } from "react";
import Dice from "./Dice";
import "./Roll.css";
export default class Roll extends Component {
  state = {
    dice1: 1,
    dice2: 1,
    isRolling: false,
  };
  handleClick = () => {
    this.setState({
      dice1: 1 + Math.floor(Math.random() * 6),
      dice2: 1 + Math.floor(Math.random() * 6),
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="rollDiv">
        <div className="diceDiv">
          <Dice isRolling={this.state.isRolling} num={this.state.dice1} />
          <Dice isRolling={this.state.isRolling} num={this.state.dice2} />
        </div>
        <button
          className="rollBtn"
          onClick={this.handleClick}
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
