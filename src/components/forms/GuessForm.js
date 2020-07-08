import React from 'react';

export default function GuessForm(props){
  return (
    <div>
      <form onSubmit={props.handleGuessSubmit}>
        <input
          className="single input" 
          type="text" 
          value={props.guess} 
          onChange={(event) => props.setGuess(event.target.value)}
        />
        <input 
          className="submit button" 
          type="submit" 
          value="Guess"
        />
      </form>
    </div>
  );
}
