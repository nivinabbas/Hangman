import './App.css';
import React, { Component } from 'react';

import Letters from './components/Letters';
import Score from './components/Score';
import Solutions from './components/Solutions';

export class App extends Component {
  constructor() {
    super();
    let letterStatus = this.generateLetterStatuses();
    this.state = { score: 200, letterStatus: letterStatus, word: 'FANCFY' , finished:false};
  }
  solution = () => {
    let completeWord = '';
    for (let letter of this.state.word) {
      if (this.state.letterStatus[letter] === true) {
        completeWord += letter;
      } else {
        completeWord += ' _ ';
      }
    }
    if(!completeWord.charAt("_")){
      this.setState({finished:true});

    }
    return completeWord;
  };
  clickedLetter = (letter) => {
    let changeLetterStatus = { ...this.state.letterStatus };

    if (this.state.word.includes(letter)) {
      this.setState({ score: this.state.score + 5 });
    } else {
      this.setState({ score: this.state.score - 20 });
    }

    changeLetterStatus[letter] = true;
    this.setState({ letterStatus: changeLetterStatus });
  };
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  render() {
    return this.state.score !== 0 ? (
      <div>
        <Score key={this.state.score} score={this.state.score} />
        <Solutions key={this.solution} solution={this.solution} />
        <Letters
          key={this.state.letterStatus}
          letterStatus={this.state.letterStatus}
          clickedLetter={this.clickedLetter}
        />
      </div>
    ) : (
      <div>
        Game Over
        <button onClick={() => window.location.reload()}>Play again?</button>
      </div>
    );
  }
}

export default App;
