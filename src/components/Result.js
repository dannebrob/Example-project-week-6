import React from 'react';

const Result = ({ name, food, drink }) => {
  return (
    <div>
      <p>Your name is {name}</p>
      <p>Your favourite food is: {food}</p>
      <p>Your favourite drink is: {drink}</p>
    </div>
  );
};

export default Result;
