import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement,increment } from "../app/features/counter/CounterSlice";

const Counter = () => {
  const counts = useSelector((state) => state.countet.val);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counts}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
};
export default Counter;
