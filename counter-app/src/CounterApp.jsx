import { useState } from "react";
import { number } from "prop-types"


export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const addOne = () => setCounter(counter + 1);
  const subtractOne = () => setCounter(counter - 1);
  const reset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ addOne }> +1 </button>
      <button onClick={ subtractOne }> -1 </button>
      <button onClick={ reset }> Reset </button>
    </>
  );
}

CounterApp.propTypes = {
  value: number.isRequired,
}
