import React from 'react';
import CreateGameForm from '../forms/CreateGameForm';
import CatDisplay from '../displays/CatDisplay';

export default function Start(props) {
  return (
    <div>
      <div className="left column">
        <div>
          Message:{props.message}
        </div>
        <div className="title page">
          Enter in a phrase for a friend to guess.
        </div>
        <CreateGameForm
          phrase={props.phrase}
          setPhrase={props.setPhrase}
          handleCreateGameSubmit={props.handleCreateGameSubmit}
        />
      </div>
      <div className="right column">
        <CatDisplay
          image={require('../static/' + props.image + '.jpg')}
        />
      </div>
    </div>
  );
}