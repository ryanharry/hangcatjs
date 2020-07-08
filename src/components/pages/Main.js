import React from 'react';
import Start from './Start';
import End from './End';
import Game from './Game';

export default function Main(props) {
  if (!props.gameActive) {
    return (
      <Start
        message={props.message}
        phrase={props.phrase}
        setPhrase={props.setPhrase}
        handleCreateGameSubmit={props.handleCreateGameSubmit}
        image={props.image}
      />
    );
  }
  else {
    if (!props.stopGuess) {
      return (
        <Game
          message={props.message}
          wrongGuesses={props.wrongGuesses}
          guessNumber={props.guessNumber}
          guess={props.guess}
          setGuess={props.setGuess}
          gameBoard={props.gameBoard}
          handleGuessSubmit={props.handleGuessSubmit}
          handleReset={props.handleReset}
          image={props.image}
        />
      );
   }
    else {
      return (
        <End
          message={props.message}
          wrongGuesses={props.wrongGuesses}
          guessNumber={props.guessNumber}
          gameBoard={props.gameBoard}
          handleReset={props.handleReset}
          image={props.image}
        />
      );
    }
  }
}
