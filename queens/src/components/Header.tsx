import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StopWatch } from "./StopWatch";
import { useState } from "react";
import { OutlineButton } from "./OutlineButton";
import HelpIcon from "@mui/icons-material/Help";
import { DropDownMenu } from "./DropdownMenu";
import { Box } from "@mui/material";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const startTime = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTime = () => {
    if (isRunning && intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  const resetTime = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <div>
        <p className="font-bold text-center bg-[#0D5BBA] text-[white] py-[12px]">
          Off-Queens
        </p>
      </div>
      <div className="flex py-[8px] px-[16px]">
        <div className="w-1/3 flex items-center">
          <a
            className="flex items-center"
            href="https://www.linkedin.com/games/queens/"
            target="_blank"
          >
            <LinkedInIcon sx={{ color: "#0D5BBA" }} />
            <p className="font-bold text-[#0D5BBA]">Queens</p>
          </a>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <AccessTimeIcon />{" "}
              <div>
                <StopWatch
                  start={startTime}
                  stop={stopTime}
                  reset={resetTime}
                  time={time}
                  isRunning={isRunning}
                />
              </div>
            </div>
            {/* <div className="flex gap-2">
                <button onClick={startTime}>Start</button>
                <button onClick={stopTime}>Stop</button>
                <button onClick={resetTime}>Reset</button>
              </div> */}
          </div>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-4">
          <div className="flex gap-2 hidden sm:flex">
            <OutlineButton label={"Clear"} action={() => ""} />
            <OutlineButton label={"Hint"} action={() => ""} />
          </div>
          <HelpIcon />
          <DropDownMenu />
        </div>
      </div>
      <Box sx={{borderTop: "1px solid #E6E6E6", borderBottom: "1px solid #E6E6E6"}}>
        <div className="flex gap-2 items-center justify-center py-[8px] sm:hidden">
          <OutlineButton label={"Clear"} action={() => ""} />
          <OutlineButton label={"Hint"} action={() => ""} />
        </div>
      </Box>
      <div className="flex justify-center bg-[#E0E0E0] py-2">
        <p className="text-[#747474] text-center text-[14px] hidden sm:flex">
          Disclaimer: Not affiliated with the actual LinkedIn Queens Game
        </p>
        <div className="flex flex-col">
          <p className="text-[#747474] text-center text-[14px]">
            Disclaimer: Not affiliated with LinkedIn.
          </p>
        </div>
      </div>
    </div>
  );
};
