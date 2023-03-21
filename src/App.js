/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Drink from 'components/Drink';
import Food from 'components/Food';
import Name from 'components/Name';
import Result from 'components/Result';

export default () => {
  const [name, setName] = useState('');
  const [step, setStep] = useState(0);
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  return (
    <div>
      <p>{step}</p>
      <button type="button" onClick={handleStepIncrease} label="button">
        +1
      </button>
      {step === 1 && <Name name={name} setName={setName} />}
      {step === 2 && <Food food={food} setFood={setFood} />}
      {step === 3 && <Drink drink={drink} setDrink={setDrink} />}
      {step === 4 && <Result name={name} drink={drink} food={food} />}
    </div>
  );
};
