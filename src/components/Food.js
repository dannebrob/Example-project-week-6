import React from 'react';

const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };
  return (
    <div>
      <p>What is your favorite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
    </div>
  );
};

export default Food;
