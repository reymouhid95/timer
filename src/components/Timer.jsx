// Timer.js
import React, { useState, useEffect, useRef } from "react";

const Timer = ({ sessionLength, breakLength }) => {
  const [isSession, setIsSession] = useState(true);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isActive, setIsActive] = useState(false);
  const beepSound = useRef(null);

  const playBeep = () => {
    beepSound.current.play();
  };

  const reset = () => {
    setIsActive(false);
    setIsSession(true);
    setTimeLeft(sessionLength * 60);
  };

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            playBeep();
            setIsSession((prevIsSession) => {
              if (prevIsSession) {
                setTimeLeft(breakLength * 60);
              } else {
                setTimeLeft(sessionLength * 60);
              }
              return !prevIsSession;
            });
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, sessionLength, breakLength]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <audio id="beep" ref={beepSound}>
        <source
          src="https://www.soundjay.com/button/beep-07.wav"
          type="audio/wav"
        />
      </audio>
      <div id="timer-label">{isSession ? "Session" : "Break"}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={toggleTimer}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
