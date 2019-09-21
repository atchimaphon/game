import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
const word = ['stack','data','command'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component {
 
  newgame = () => {
    window.location.reload(false);
  }
  render() {
    return (
      <div className = "App">
        <h1 id="welcome"> Welcome to Game</h1>
        <WordCard value={item.toUpperCase()}/>
        <h2 id="complete"></h2>
        <h2 id="newgame"></h2>
        <h2 id="surrender"></h2>
        <h2 id="ans"></h2> 
        <h2 id="result"></h2>
        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
        
      </div>
    );
  }
}
export default App;
