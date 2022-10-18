import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/modules/counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </React.Fragment>
  );
};

export default Counter;
