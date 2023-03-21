import React from 'react';

const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>Whats your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default Name;
