import React, { Component } from 'react';

class Letter extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false,
    };
  }
  clickedLetter = () => {
    this.props.clickedLetter(this.props.letter);
    this.setState({ isClick: true });
  };
  render() {
    return this.state.isClick ? (
      <span
        style={{ textDecoration: 'line-through' }}
        onClick={this.clickedLetter}
      >
        {this.props.letter}
      </span>
    ) : (
      <span onClick={this.clickedLetter}>{this.props.letter}</span>
    );
  }
}

export default Letter;
