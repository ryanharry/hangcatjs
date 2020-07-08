import React from 'react';
import GuessForm from '../forms/GuessForm';
import CatDisplay from '../displays/CatDisplay';
import GuessDisplay from '../displays/GuessDisplay';

export default function Game(props) {
  return (
    <div>
      <div className="left column">
        <div>
          Message:{props.message}
        </div>
        <GuessDisplay
          wrongGuesses={props.wrongGuesses}
          guessNumber={props.guessNumber}
        />
        <div className="game board">
          {props.gameBoard}
        </div>
        <GuessForm
          guess={props.guess}
          setGuess={props.setGuess}
          handleGuessSubmit={props.handleGuessSubmit}
        />
        <button className="reset button" onClick={props.handleReset}>Reset Game</button>
      </div>
      <div className="right column">
        <CatDisplay
          image={require('../static/' + props.image + '.jpg')}
        />
      </div>
    </div>
  );
}