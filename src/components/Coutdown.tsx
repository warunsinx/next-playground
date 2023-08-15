import React, { useEffect, useState } from "react";

export default function Coutdown() {
  const [inputMinute, setInputMinute] = useState("0");
  const [inputSecond, setInputSecond] = useState("0");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    const totalSecond = parseInt(inputMinute) * 60 + parseInt(inputSecond);
    setMinute(Math.floor(totalSecond / 60));
    setSecond(totalSecond % 60);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinute(0);
    setSecond(0);
    setInputMinute("0");
    setInputSecond("0");
  };

  useEffect(() => {
    if (isRunning) {
      const intervalID = setInterval(() => {
        if (second === 0) {
          if (minute === 0) {
            clearInterval(intervalID);
            setIsRunning(false);
          } else {
            setMinute((prev) => prev - 1);
            setSecond(59);
          }
        } else setSecond((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(intervalID);
    }
  }, [isRunning, minute, second]);

  const formatTime = (time: number) => {
    return time > 9 ? time : `0${time}`;
  };

  const displayTime = `${formatTime(minute)}:${formatTime(second)}`;

  return (
    <>
      <label>
        <input
          value={inputMinute}
          onChange={(e) => setInputMinute(e.target.value)}
          type="number"
        />
        Minutes
      </label>
      <label>
        <input
          value={inputSecond}
          onChange={(e) => setInputSecond(e.target.value)}
          type="number"
        />
        Seconds
      </label>

      <button onClick={handleStart}>START</button>
      <button onClick={handlePauseResume}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>

      <h1 data-testid="running-clock">{displayTime}</h1>
    </>
  );
}
