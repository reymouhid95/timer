// TimerDisplay.js
import React from "react";

const TimerDisplay = ({ label, time }) => {
  return (
    <div>
      <div id="timer-label">{label}</div>
      <div id="time-left">{time}</div>
    </div>
  );
};

export default TimerDisplay;
