// TimerControls.js
import React from "react";

const TimerControls = ({ increment, decrement, length, label }) => {
  return (
    <div>
      <div id={`${label.toLowerCase()}-label`}>{label}</div>
      <button id={`${label.toLowerCase()}-decrement`} onClick={decrement}>
        Decrement
      </button>
      <div id={`${label.toLowerCase()}-length`}>{length}</div>
      <button id={`${label.toLowerCase()}-increment`} onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default TimerControls;
