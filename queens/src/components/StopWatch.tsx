import React from "react";

// Define the prop types for the Stopwatch component
interface StopWatchProps {
  start: () => void;        // start function (takes no parameters and returns nothing)
  stop: () => void;         // stop function (takes no parameters and returns nothing)
  reset: () => void;        // reset function (takes no parameters and returns nothing)
  time: number;             // time in seconds (number)
  isRunning: boolean;       // whether the stopwatch is running (boolean)
}

export const StopWatch: React.FC<StopWatchProps> = ({ start, stop, reset, time, isRunning }) => {
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{formatTime(time)}</h2>
    </div>
  );
};
