import React from 'react';

const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };
  return (
    <div>
      <p>What is your favourite drink? </p>
      <input type="text" value={drink} onChange={handleDrinkChange} />
    </div>
  );
};

export default Drink;
