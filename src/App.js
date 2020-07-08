import React, { useState, useEffect } from 'react';
import Main from './components/pages/Main';
import './App.css';

export default function App() {

  const [gameBoard, setGameBoard] = useState("");
  const [updateBoard, setUpdateBoard] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [guessNumber, setGuessNumber] = useState(0);
  const [image, setImage] = useState('lump6');
  const [updateImage, setUpdateImage] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [guess, setGuess] = useState("");
  const [phrase, setPhrase] = useState("");
  const [stopGuess, setStopGuess] = useState(false);
  const [message, setMessage] = useState("");

  const bannedChar = "'1234567890=!@#$%^&*()_+{}[]|:;,./<>?`~";
  const bannedQuotes = '"';
  const bannedCharacters = bannedChar + bannedQuotes;
  const baseImage = "lump";

  function handleReset() {
    setGameBoard("");
    setWrongGuesses([]);
    setGuesses([]);
    setGuessNumber(0);
    setImage('lump6');
    setGameActive(false);
    setPhrase("");
    setStopGuess(false);
    setMessage("");
  }

  useEffect(() => {
    if (updateBoard) {
      let newBoard = createGameBoard();
      setGameBoard(newBoard);

      if (phrase === newBoard) {
        setStopGuess(true);
        setMessage("You Won!");
      }
      else {
        setMessage("");
      }

      setUpdateBoard(false);
      setGuess("");
    }
  // eslint-disable-next-line
  }, [updateBoard, phrase])

  useEffect(() => {
    if (updateImage) {
      let guessToLower = guess.toLowerCase();
      let previousWrong = wrongGuesses;
      let currentWrong = previousWrong.concat(guessToLower);
      setWrongGuesses(currentWrong);
      setImage(baseImage + currentWrong.length);

      if (currentWrong.length === 6) {
        setStopGuess(true);
        setGameBoard(phrase);
        setMessage("You Lose!");
      }
      else {
        setMessage("");
      }

      setUpdateImage(false);
      setGuess("");
    }
  }, [updateImage, phrase, guess, wrongGuesses])

  function checkPhraseForBanned() {
    if (phrase.trim().length === 0) {
      setMessage('Please enter a phrase');
      return false
    }
    var i, len;
    for (i = 0, len = bannedCharacters.length; i < len; i++) {
      if (phrase.includes(bannedCharacters[i])) {
        setMessage('Please only use letters and - for making a phrase');
        return false
      }
    }
    return true
  }

  function checkGuess() {
    if (guess.length === 0) {
      setMessage("Please enter a character");
      return false
    }
    else if (guess.length > 1) {
      setMessage("Please only enter one chatacter at a time");
      return false
    }
    else if (guesses.includes(guess.toLowerCase())) {
      setMessage("You have already guessed that letter");
      return false
    }
    else {
      if (bannedCharacters.includes(guess.toLowerCase())) {
        setMessage("Please only use letters, you have used a special character");
        return false
      }
    }
    return true
  }

  function handleCreateGameSubmit(event) {
    event.preventDefault();

    if (checkPhraseForBanned()) {
      let newBoard = createGameBoard();
      setGameBoard(newBoard);
      setGameActive(true);
      setMessage("");
      setImage(baseImage + guessNumber);
    }
  }

  function createGameBoard() {
    let newBoard = "";
    let newPhrase = phrase.toLowerCase();

    newPhrase.split("").forEach(function(char){
      if (guesses.includes(char)) {
        newBoard = newBoard.concat(char)
      }
      else {
        if (char === " " || char === "-") {
          newBoard = newBoard.concat(char);
        }
        else {
          newBoard = newBoard.concat("_");
        }
      }
    });
    return newBoard
  }

  function checkGuessInPhrase(guess) {
    if (phrase.includes(guess)) {
      return true
    }
    else {
      return false
    }
  }

  function handleGuessSubmit(event) {
    event.preventDefault();
    
    let isGuessValid = checkGuess();

    if (isGuessValid) {
      setGuessNumber(guessNumber + 1);
      let guessToLower = guess.toLowerCase();
      let isGuessInPhrase = checkGuessInPhrase(guessToLower);
      let currentGuesses = guesses;
      setGuesses(currentGuesses.concat(guessToLower));
      
      if (isGuessInPhrase) {
        setUpdateBoard(true);
      }
      else {
        setUpdateImage(true);
      }
      return true
    }
  }

  return (
    <Main 
      message={message}
      guess={guess}
      setGuess={setGuess}
      stopGuess={stopGuess}
      gameBoard={gameBoard}
      wrongGuesses={wrongGuesses}
      image={image}
      phrase={phrase}
      setPhrase={setPhrase}
      guessNumber={guessNumber}
      gameActive={gameActive}
      handleGuessSubmit={handleGuessSubmit}
      handleCreateGameSubmit={handleCreateGameSubmit}
      handleReset={handleReset}
    />
  );
} 
