import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </React.Fragment>
  );
};

export default Counter;
