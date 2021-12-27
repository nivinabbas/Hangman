import Letter from "./Letter";
import React, { Component } from "react";


class Letters extends Component {

  clickedLetter = (letter) => {

    this.props.clickedLetter(letter);
  };

  render() {
    return (
      <div>
        {Object.keys(this.props.letterStatus).map((l) => 
      
        <Letter letter={l} key={l} clickedLetter={this.clickedLetter} >{l}</Letter>
  )}
      </div>
    );
  }
}



export default Letters;