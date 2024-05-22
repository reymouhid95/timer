// App.js
import React, { useState } from "react";
import Timer from "./components/Timer";
import TimerControls from "./components/TimerControls";
import "./App.css";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  const incrementBreak = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <div>
      <TimerControls
        increment={incrementSession}
        decrement={decrementSession}
        length={sessionLength}
        label="Session"
      />
      <TimerControls
        increment={incrementBreak}
        decrement={decrementBreak}
        length={breakLength}
        label="Break"
      />
      <Timer sessionLength={sessionLength} breakLength={breakLength} />
    </div>
  );
};

export default App;
