import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
const word = ['stack','data','command'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1 id="welcome"> Welcome to Game</h1>
        <WordCard value={item.toUpperCase()}/>
        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
        
      </div>
        
     
    );
  }
}
export default App;
