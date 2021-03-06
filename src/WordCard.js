import React, { Component }from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
		let word = given_word.toUpperCase()
		let chars = _.shuffle(Array.from(word))
		return {
			word,
			chars,
			attempt: 1,
			guess: [],
			completed: false
		}
	}
export default class WordCard extends Component {
	constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
	activationHandler = (c) => { 
		console.log(`${c} has been activated.`)
		let guess = [...this.state.guess, c]
		this.setState({guess})
		document.getElementById('input').innerHTML = `Your input = ${guess.join('->').toString()}`
		if(guess.length == this.state.chars.length){
			console.log(guess.join('').toString())
            console.log(this.state.chars.join('').toString())
		if(guess.join('').toString() == this.state.chars.join('').toString()){
			this.setState({guess: [], complete: true})
			document.getElementById('complete').innerHTML = `Congratulations! (5 second Newgame)`
			document.getElementById('newgame').style.display = "inline-block";
			setTimeout(() =>  window.location.reload(false),2000)
		}else{
			this.setState({guess: [], attempt: this.state.attempt + 1})
			document.getElementById('result').innerHTML = `Already played ${this.state.attempt}`
			document.getElementById('play').innerHTML = `Can play again ${5-this.state.attempt} `
			if(this.state.attempt == 5){
				document.getElementById('ans').innerHTML = `Correct Answer  = ${this.state.chars.join('->').toString()} (5 second Newgame)`
				document.getElementById('result').innerHTML = `GameOver (5 second Newgame)`
				setTimeout(() =>  window.location.reload(false),2000) 
		}
		}  
	}
}
	render(){
		if(this.props.requstAns){
			console.log(this.state.chars.join(''))
			this.props.show(this.state.chars.join('->'))
		}
		return (
			<div>
				{ Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>) }
			 </div>
		)
		}
}