import React from 'react';

export default function CreateGameForm(props) {
  return (
    <div>
      <form onSubmit={props.handleCreateGameSubmit}>
        <input
          className="single input"
          type="password"
          value={props.phrase}
          onChange={(event) => props.setPhrase(event.target.value)}
        />
        <input
          className="submit button"
          type="submit"
          value="Create Game"
        />
      </form>
    </div>
  );
}
