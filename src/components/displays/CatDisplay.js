import React from 'react';

export default function CatDisplay(props) {
  return (
    <div>
      <img
        src={props.image}
        height="30%"
        width="100%"
        alt='error'
      />
    </div>
  );
}
