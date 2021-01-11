import { useState } from "react";

const useCounter = (initianCount = 10, factor = 1) => {
  const [counter, setCounter] = useState(initianCount);

  const increment = () => {
    setCounter(counter + factor);
  };

  const decrement = () => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initianCount);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
