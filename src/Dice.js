import React, { Component } from "react";
import  './Dice.css'
export default class Dice extends Component {
  render() {
    let obj;
    switch (this.props.num) {
      case 1:
        obj = <i className={`dice fa-10x fa-solid fa-dice-one ${this.props.isRolling?"shake":""}`}></i>;
        break;
      case 2:
        obj = <i className={`dice fa-10x fa-solid fa-dice-two ${this.props.isRolling?"shake":""}`}></i>;
        break;
      case 3:
        obj = <i className={`dice fa-10x fa-solid fa-dice-three ${this.props.isRolling?"shake":""}`}></i>;
        break;
      case 4:
        obj = <i className={`dice fa-10x fa-solid fa-dice-four ${this.props.isRolling?"shake":""}`}></i>;
        break;
      case 5:
        obj = <i className={`dice fa-10x fa-solid fa-dice-five ${this.props.isRolling?"shake":""}`}></i>;
        break;
      case 6:
        obj = <i className={`dice fa-10x fa-solid fa-dice-six ${this.props.isRolling?"shake":""}`}></i>;
        break;
      default :
    }
    return <div>{obj} </div>;
  }
}
