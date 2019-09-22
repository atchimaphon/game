import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
import Logo from "./logo.mp4";
const word = ['stack','data','command'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component {
 
  newgame = () => {
    window.location.reload(false);
  }
  render() {
    return (
      <div className = "App" >
        <h1 id="welcome">Welcome to Game</h1>
        <h2 id="play"></h2>
        <h2 id="word">
          <WordCard value={item.toUpperCase()}/>
        </h2>
        <h2 id="complete"></h2>
        <h2 id="newgame"></h2>
        <h2 id="ans"></h2> 
        <h2 id="result"></h2>
        <h2 id="again">You can try again 5 time</h2>
        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
        <div id ="media">
        <video controls autostart autoPlay src={Logo} type="logo/mp4" />
         <h4>Atchimaphon Supharat 6010110399</h4>
        </div>
        
      </div>
    );
  }
}
export default App;
