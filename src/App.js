import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
import Logo from "./logo.mp4";
const word = ['stack','data','command','static','wireless'];
var item = word[Math.floor(Math.random()*word.length)];


class App extends Component {
  constructor(){
    super();
    this.state ={
      requstAns : false   
    }
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
    console.log(this.audio);
    this.audio.play();
  }
  newgame = () => {
    window.location.reload(false);
  }
  close = () =>{
    window.close();
  }
  requstAns = () => {
    this.setState({
      requstAns : true
    })
  }
  show = (answer) =>{
    document.getElementById('solve' ).innerHTML = `${answer}`
  }

  
  render() {
    return (
      <div className = "App" >
        <h1 id="welcome">Welcome to Game</h1>
      
        <h2 id="play"></h2>
        <h2 id="word">
        { 
           <WordCard value={item.toUpperCase()}  requstAns={this.state.requstAns} show ={this.show }/>     
        }
        </h2>
        <h2 id="input"></h2>
        <h2 id="complete"></h2>
        <h2 id="newgame"></h2>
        <h2 id="ans"></h2> 
        <h2 id="result"></h2>
        <h2 id="solve">Answer</h2>
        <h2 id="again">You can try again 5 time</h2>
        <button id="show" className="button" onClick={this.requstAns}>SURRENDER</button>
        <button id="newgame" className="button" onClick={this.newgame}>NEW GAME</button>
        <button id="close" className="button" onClick={this.close}>EXIT</button>
        <div id ="media">
          <video controls autostart autoPlay src={Logo} type="logo/mp4" />
          <h4>Atchimaphon Supharat 6010110399</h4>
        </div>
      </div>
    );
  }
}
export default App;
