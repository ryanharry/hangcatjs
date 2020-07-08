import React from 'react';

export default function GuessDisplay(props) {
  return (
    <div>
      <div>
        <p>Wrong Guesses: [{props.wrongGuesses}]</p>
      </div>
      <div>
        <p>Number of Guesses: {props.guessNumber}</p>
      </div>
    </div>
  );
}
